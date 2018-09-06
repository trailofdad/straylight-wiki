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
          <div className="container p-0 my-3 my-lg-5 text-center">
            <h1>A squadron worth fighting for</h1>
            <p className="lead text-primary">
              Often outmanned, never outgunned.
            </p>

            <div>
              <a
                href="https://www.youtube.com/watch?v=b4SfPGib7VQ"
                className="btn btn-outline-primary"
                target="_blank"
              >
                Watch the trailer
              </a>
              <a
                href="/apply"
                className="btn btn-outline-light ml-1 ml-md-3"
                target="_self"
              >
                Apply today
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="container p-0">
            <div className="card-deck">
              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/2018.09.01.02.45.16.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Small, but mighty</h5>
                  <p className="card-text">
                    Straylight pilots rely on experience and strategy to
                    outsmart, outclass and outplay the enemy.
                  </p>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/2017.05.27.23.38.54.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Learn from the best</h5>
                  <p className="card-text">
                    Our fleet commanders have thousands of hours of flying
                    experience, and they're willing to pass that knowledge on to
                    you.
                  </p>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/2017.02.28.02.10.30.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Friends for life</h5>
                  <p className="card-text">
                    Find yourself surrounded by new friends willing to support
                    you through New Eden - and life's - greatest trials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Index
