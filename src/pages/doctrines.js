import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import SitePost from '../components/SitePost'

class DoctrinesPage extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const doctrines = get(this, 'props.data.remark.doctrines')

    const sortedDoctrines = sortBy(doctrines, doctrine =>
      get(doctrine, 'doctrine.frontmatter.date')
    ).reverse()

    sortedDoctrines.forEach((data, i) => {
      const layout = get(data, 'doctrine.frontmatter.layout')
      const path = get(data, 'doctrine.path')
      if (layout === 'doctrine' && path !== '/404/') {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <SitePost data={data.doctrine} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

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
        {pageLinks}
      </div>
    )
  }
}

export default DoctrinesPage

export const doctrinesQuery = graphql`
  query DoctrinesQuery {
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
      doctrines: edges {
        doctrine: node {
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
