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
          <div className="container p-0">
            <h1>Origin</h1>
            <p className="lead text-muted">
              A pilot should never forget where he comes from.
            </p>
            <div>
              <p>
                In the beginning, there was infinite opportunity; the hope held
                by the promise of the EVE Gate and the adventure that lied
                beyond its vortex. Brave souls stepped forth, seeking to forge
                new futures and conquer new lands in a renewed search for
                prosperity. Never before had mankind witnessed such a leap
                forward: united, we stood together – a race augmented through
                immortality.
              </p>
              <p>
                It is now YC120. Many things have changed. Across New Eden,
                capsuleers mindlessly rain death and destruction on each other
                without purpose or reason.
              </p>
              <p>But it was never meant to be this way.</p>
              <p>
                In the outer reaches of Stain, two seasoned commanders yearned
                for something more: a future likened to the vision their
                ancestors once shared, one of meaning, depth, and opulence. They
                had endured the wrath of man’s hatred towards man. They had seen
                the horrors of our race’s darkest hours. They were ready for
                change.
              </p>
              <p>
                They laid the foundation of The Villa Straylight - much to the
                chagrin of the Russians that surrounded them on all sides - and
                set their sights on expanding their influence. They resisted
                destruction, time and time again, at the hands of fleets
                multiple times their size.
              </p>
              <p>
                Then they were discovered by&nbsp;
                <a
                  href="https://docs.google.com/document/d/1s7KR4roZm25SfL4E-NK8Ab95IPQbrgk-1FESzKlXGvk/edit"
                  target="_blank"
                >
                  Thaddeus Drake
                </a>{' '}
                who, in all of his glory, invited them to join forces with&nbsp;
                <a
                  href="https://zkillboard.com/alliance/99006020/"
                  target="_blank"
                >
                  Who Dares Wins
                </a>{' '}
                on a quest for dank frags.
              </p>
              <p>
                Empowered by their newfound devotion, they venture onward, on a
                path to create experiences of meaning, hope, and valour. The
                Straylight fold has been solidified, and the greatest adventure
                is about to unfold.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Origin
