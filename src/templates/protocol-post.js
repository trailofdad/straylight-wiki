import get from 'lodash/get'
import Helmet from 'react-helmet'
import React from 'react'

import Layout from '../components/Layout'
import ProtocolPost from '../components/ProtocolPost'
import ProtocolMenu from '../components/ProtocolMenu'

class ProtocolPostTemplate extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      $('.article-wrap').css({ opacity: 1 })
    }, 250)
  }

  render() {
    const post = get(this, 'props.data.postResource.posts[0].post')
    const tags = get(this, 'props.data.tagResource.tags')

    const site = get(this, 'props.data.site')
    const title = get(post, 'title')
    const siteTitle = get(site, 'meta.title')

    let template = (
      <ProtocolPost
        data={post}
        site={site}
        author={post.primary_author}
        isIndex={false}
      />
    )

    return (
      <div>
        <Helmet
          title={`${title} | ${siteTitle}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'meta.twitter')}` },
            { property: 'og:title', content: get(post, 'title') },
            { property: 'og:type', content: 'article' },
            {
              property: 'og:description',
              content: get(post, 'html')
                .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
                .substr(0, 200),
            },
            {
              property: 'og:url',
              content: get(site, 'meta.url') + get(post, 'slug'),
            },
            {
              property: 'og:image',
              content: get(post, 'html').slice(48, 125),
            },
          ]}
        />

        <Layout location={this.props.location}>
          <section className="pt-4">
            <ProtocolMenu
              tags={tags}
              {...this.props}
              postTag={get(post, 'tags[0].slug')}
            />
            {template}
          </section>
        </Layout>
      </div>
    )
  }
}

export default ProtocolPostTemplate

export const pageQuery = graphql`
  query ProtocolPostByPath($slug: String!) {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    postResource: allGhostPost(filter: { slug: { eq: $slug } }) {
      posts: edges {
        post: node {
          id
          slug
          title
          html
          published_at(formatString: "YYYY/MM/DD")
          primary_author {
            id
            name
            profile_image
          }
          featured
          tags {
            id
            name
            slug
          }
        }
      }
    }
    tagResource: allGhostTag {
      tags: edges {
        tag: node {
          id
          slug
          name
        }
      }
    }
  }
`
