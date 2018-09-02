import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import ProtocolPost from '../../components/ProtocolPost'

class ProtocolEntry extends React.Component {
  render() {
    const pageLinks = []
    const tagLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.postResource.posts')
    const tags = get(this, 'props.data.tagResource.tags')

    if (tags) {
      tags.map((data, i) => {
        tagLinks.push(<li>{data.tag.name}</li>)
      })
    }

    if (posts) {
      posts.map((data, i) => {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <ProtocolPost data={data.post} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      })
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
          {tagLinks}
          {pageLinks}
        </section>
      </div>
    )
  }
}

export default ProtocolEntry

// gatsby-source-ghost tag api not ready yet
// tagResource: allGhostTag {
//   tags: edges {
//     tag: node {
//       id
//       slug
//       name
//     }
//   }
// },

export const pageQuery = graphql`
  query ProtocolQuery {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    postResource: allGhostPost(sort: { order: DESC, fields: [published_at] }) {
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
