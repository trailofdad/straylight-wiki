import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Index from '../components/Index/index'
import Layout from '../components/layout'

class SiteIndex extends React.Component {
  render() {
    const site = get(this, 'props.data.site.siteMetadata')
    const { data } = this.props

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
          <Index posts={data.remark.posts} />
        </Layout>
      </div>
    )
  }
}

export default SiteIndex

// TODO: Add index content to site metadata, update query - pass to component as props
export const pageQuery = graphql`
  query IndexQuery {
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
    remark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            categories
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
