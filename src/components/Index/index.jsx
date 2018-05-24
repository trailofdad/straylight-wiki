import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

class Index extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Straylight Systems'
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
        <section>
          <div className="container">
            <h1>A squadron worth fighting for</h1>
            <p className="lead text-muted">Often outmanned, never outgunned.</p>

            <div>
              <a
                href="https://www.youtube.com/watch?v=b4SfPGib7VQ"
                class="btn btn-secondary"
                target="_blank"
              >
                Watch the trailer
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Index
