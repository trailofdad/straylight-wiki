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
          <div className="container">
            <h1>Apply</h1>
            <p className="lead text-muted">Applying to Straylight Systems</p>
            <div>
              <p>
                If you are not currently in contact with a recruiter, please
                join the channel “Straylight Systems Public” in game to get an
                interview (quick chat). Until you have been notified otherwise
                please stay in the public channel.
              </p>
              <p>
                Since you’re reading this outside the realm of New Eden, you can
                also get in touch with us on Slack. You can obtain an invite
                here: http://slack.straylight.systems.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Apply
