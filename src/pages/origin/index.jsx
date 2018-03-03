import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

class Origin extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Origin'
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
            <h1>Straylight Systems Origin Story</h1>
            <p className="lead text-muted">Outmanned, but never outgunned</p>
            <div>
              <p>
                In the beginning, there was infinite opportunity; the hope held
                by the promise of the EVE gate and the adventure that lied
                beyond its vortex. Brave souls stepped forth, seeking to forge
                new futures and conquer new lands in a renewed search for
                prosperity. Never before had mankind witnessed such a leap
                forward: united, we stood together – a race augmented through
                immortality..
              </p>
              <p>
                It is now YC 119. Many things have changed. Across New Eden,
                capsuleers mindlessly rain death and destruction on each other
                for no reason whatsoever. Priceless structures are destroyed
                without purpose.
              </p>
              <p>But it was never meant to be this way.</p>
              <p>
                In the outer reaches of space, two seasoned commanders yearned
                for something more: a future likened to the vision their
                ancestors once shared, one of meaning, depth, and opulence. They
                had endured the wrath of man’s hatred towards man. They had seen
                the horrors of our race’s darkest hours. They were ready for
                change.
              </p>
              <p>Then they discovered God, in all of his glory.</p>
              <p>
                Empowered by their newfound Amarrian devotion, they ventured
                onward, on a path to create meaning. They laid the foundation of
                the Freeside, then set their sights on expanding their influence
                – with the goal of invoking the purity of the Amarrian throne
                throughout the galaxy. At last, they were finally home.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Origin
