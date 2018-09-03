import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'

import ProtocolPost from '../components/ProtocolPost'

class ProtocolPostTemplate extends React.Component {
  render() {
    const post = get(this, 'props.data.ghost.posts[0].post')
    const site = get(this, 'props.data.site')
    const title = get(post, 'title')
    const siteTitle = get(site, 'meta.title')

    let template = <ProtocolPost data={post} site={site} isIndex={false} />

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
        <section>{template}</section>
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
    ghost: allGhostPost(filter: { slug: { eq: $slug } }) {
      posts: edges {
        post: node {
          id
          slug
          title
          html
          published_at(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
