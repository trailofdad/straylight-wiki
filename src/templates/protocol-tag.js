import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import ProtocolCard from '../components/ProtocolCard'
import ProtocolMenu from '../components/ProtocolMenu'

class ProtocolTagTemplate extends React.Component {
  getAuthor(id, authors) {
    let author = authors.find(({ author }) => author.ghostId === id)

    if (author) return author.author
  }

  render() {
    const site = get(this, 'props.data.site.siteMetadata')
    const tags = get(this, 'props.data.tagResource.tags')
    const slug = get(this, 'props.pathContext.slug')
    const authors = get(this, 'props.data.authorResource.authors')
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
          <LazyLoad height={500} offset={500} once={true} key={i}>
            {/* <ProtocolPost
              data={data.post}
              site={site}
              author={this.getAuthor(data.post.author, authors)}
              isIndex={true}
              key={i}
            /> */}
            <ProtocolCard
              data={data.post}
              site={site}
              author={this.getAuthor(data.post.author, authors)}
              isIndex={true}
              key={i}
            />
          </LazyLoad>
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
        <section>
          <ProtocolMenu tags={tags} slug={slug} {...this.props} />

          <div className="container p-0">
            <div className="card-columns">{pageLinks}</div>
          </div>
        </section>
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
          ghostId
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
          author
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
    authorResource: allGhostAuthor {
      authors: edges {
        author: node {
          ghostId
          name
          profile_image
        }
      }
    }
  }
`
