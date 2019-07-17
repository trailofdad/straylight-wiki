import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import ProtocolCard from '../components/ProtocolCard'
import ProtocolMenu from '../components/ProtocolMenu'

class ProtocolTagTemplate extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      $('.card.card-protocol').each((index, element) => {
        let delay = index * 75

        setTimeout(() => $(element).css({ opacity: 1 }), 0 + delay)
      })
    }, 500)
  }

  render() {
    const site = get(this, 'props.data.site.siteMetadata')
    const tags = get(this, 'props.data.tagResource.tags')
    const slug = get(this, 'props.pathContext.slug')
    let posts = get(this, 'props.data.postResource.posts')

    const pageLinks = []

    // We have to do this here for now instead of the query
    // due to a bug in Gatsby: https://github.com/gatsbyjs/gatsby/issues/4799
    posts = posts.filter(node => {
      let isIncluded = node.post.tags.filter(tag => tag.slug === slug).length

      if (isIncluded) {
        return node
      }
    })

    if (posts) {
      posts.map((data, i) => {
        pageLinks.push(
          <ProtocolCard
            data={data.post}
            site={site}
            author={data.post.primary_author}
            isIndex={true}
            key={i}
          />
        )
      })
    } else {
      pageLinks.push(<p>No items in this section.</p>)
    }

    return (
      <div>
        <Helmet
          title={get(site, 'title')}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
            { property: 'og:title', content: get(site, 'title') },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: get(site, 'description') },
            { property: 'og:url', content: get(site, 'url') },
            {
              property: 'og:image',
              content: `${get(site, 'url')}/img/profile.jpg`,
            },
          ]}
        />

        <Layout location={this.props.location}>
          <section className="pt-4">
            <ProtocolMenu tags={tags} slug={slug} {...this.props} />

            <div className="container p-0">
              <div className="card-columns">{pageLinks}</div>
            </div>
          </section>
        </Layout>
      </div>
    )
  }
}

export default ProtocolTagTemplate

export const pageQuery = graphql`
  query ProtocolTagQuery {
    tagResource: allGhostTag {
      tags: edges {
        tag: node {
          id
          slug
          name
        }
      }
    }
    postResource: allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      posts: edges {
        post: node {
          id
          slug
          title
          html
          primary_author {
            id
            name
            profile_image
          }
          tags {
            id
            name
            slug
          }
          featured
          published_at(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
