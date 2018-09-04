import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

import ProtocolPost from '../components/ProtocolPost'
import ProtocolMenu from '../components/ProtocolMenu'

class ProtocolPostTemplate extends React.Component {
  getAuthor(id, authors) {
    let author = authors.find(({ author }) => author.ghostId === id)

    if (author) return author.author
  }

  render() {
    const post = get(this, 'props.data.postResource.posts[0].post')
    const site = get(this, 'props.data.site')
    const title = get(post, 'title')
    const siteTitle = get(site, 'meta.title')
    const tags = get(this, 'props.data.tagResource.tags')
    const authors = get(this, 'props.data.authorResource.authors')

    let template = (
      <ProtocolPost
        data={post}
        site={site}
        author={this.getAuthor(post.author, authors)}
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
          ]}
        />
        <section>
          <ProtocolMenu
            tags={tags}
            {...this.props}
            postTag={get(post, 'tags[0].slug')}
          />
          {template}
        </section>
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
          author
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
          ghostId
          slug
          name
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
