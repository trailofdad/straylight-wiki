import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

class Apply extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Apply'
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
          <div className="container p-0">
            <h1>Apply</h1>
            <p className="lead text-muted">Your home among the stars awaits.</p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=b4SfPGib7VQ"
                title="2018 Recruitment Trailer"
              >
                <img
                  src="https://img.youtube.com/vi/b4SfPGib7VQ/maxresdefault.jpg"
                  alt="Watch our new recruitment reel"
                />
              </a>
            </p>
            <div>
              <p>
                If you're a positive individual seeking something more rewarding
                than the typical corporate experience in EVE, you might just be
                a fit for Straylight. We're currently enlisting active combat
                enthusiasts for mercenary deployments across New Eden.
              </p>
              <p>
                If you are not currently in contact with a recruiter, please
                join the channel <strong>Straylight Systems Public</strong> in
                game to get an interview. It's important that you stick around
                in that channel until your application process is complete.
              </p>
              <p>
                Since you’re reading this outside the realm of New Eden, you can
                also get in touch with us on{' '}
                <a href="http://slack.straylight.systems" target="_blank">
                  Slack.
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Apply
