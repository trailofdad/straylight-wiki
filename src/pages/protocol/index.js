import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import ProtocolPost from '../../components/ProtocolPost'
import ProtocolMenu from '../../components/ProtocolMenu'

class ProtocolEntry extends React.Component {
  render() {
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.postResource.posts')
    const tags = get(this, 'props.data.tagResource.tags')

    const pageLinks = []

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
          <ProtocolMenu tags={tags} {...this.props} />
          {pageLinks}
        </section>
      </div>
    )
  }
}

export default ProtocolEntry

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
          published_at(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
