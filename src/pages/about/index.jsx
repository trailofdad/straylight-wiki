import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

class About extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'About'
    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/about`,
            },
            {
              property: 'og:image',
              content: `${get(siteMetadata, 'siteUrl')}/img/about.jpg`,
            },
          ]}
        />
        <section className="text-center">
          <div className="container">
            <h1>About</h1>
            <p className="lead text-muted">lead</p>
            <div>
              <p>Hey this is some stuff about some stuff.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default About
