import React from 'react'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'
import Layout from '../../components/Layout'
import { siteMetadata } from '../../../gatsby-config'

import SiteCard from '../../components/SiteCard'

class Blog extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')

    const sortedPosts = sortBy(posts, post =>
      get(post, 'post.frontmatter.date')
    ).reverse()

    sortedPosts.forEach((data, i) => {
      const layout = get(data, 'post.frontmatter.layout')
      const path = get(data, 'post.path')
      if (layout === 'post' && path !== '/404/') {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <SiteCard data={data.post} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

    const title = 'Journal'

    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
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
          <section>
            <div className="container p-0">
              <div className="card-columns">{pageLinks}</div>
            </div>
          </section>
        </Layout>
      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
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
    remark: allMarkdownRemark {
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
