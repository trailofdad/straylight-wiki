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
            <h1>Apply Now</h1>
            <p className="lead text-muted">
              Your home among the stars awaits just three steps.
            </p>
          </div>
        </section>

        <section className="pt-0">
          <div className="container p-0">
            <div className="card-deck">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">Get in touch</h5>
                  <p className="card-text">
                    Join our open channel now to speak with Straylight Command.
                  </p>
                  <a
                    className="btn btn-outline-primary"
                    href="https://discord.gg/35RcgXA"
                    target="_blank"
                  >
                    Join on Discord
                  </a>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">Tell us about you</h5>
                  <p className="card-text">
                    We'll make time for a brief chat to get to know each other,
                    and help you determine if you're a fit for Straylight.
                  </p>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">Register for services</h5>
                  <p className="card-text">
                    Sign in with your main to our secure, automated tool for
                    services access.
                  </p>
                  <a
                    className="btn btn-outline-primary"
                    href="https://mgmt.straylight.systems/"
                    target="_blank"
                  >
                    Register on SEAT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-0">
          <div className="container p-0">
            <p>
              If you're a positive individual seeking something more rewarding
              than the typical corporate experience in EVE, you might just be a
              fit for Straylight. We're currently looking to grow our roster of
              active combat pilots.
            </p>
            <p>
              Straylight operatives enjoy a number of established logistical
              services and benefits:
            </p>

            <div className="card-columns pt-3">
              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/2018.04.24.21.16.08.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Constant fleet action</h5>
                  <p className="card-text">
                    Everything from medium-sized doctrine fleets to small-gang
                    warfare operations occurs on the regular. Log in and join
                    the action!
                  </p>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/2017.06.25.02.15.54.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Supercapital hunting</h5>
                  <p className="card-text">
                    You don't need to be a part of the blob to take down some of
                    New Eden's giants. You just need to fly with us.
                  </p>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/2018.06.17.02.40.47.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">R64 moon mining operations</h5>
                  <p className="card-text">
                    Sustain your capital deployment with a rich ecosystem of
                    moons to kick back and profit from.
                  </p>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/2017.12.02.20.09.55.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Free asset relocation</h5>
                  <p className="card-text">
                    You're already set up somewhere, and logistical efforts in
                    New Eden can be dangerous and time consuming. Let us handle
                    it for you.
                  </p>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/2017.05.13.20.29.36.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Black Ops Training</h5>
                  <p className="card-text">
                    Fly alongside some of the most feared Black Ops specialists
                    in all of New Eden with our alliance, Who Dares Wins.
                  </p>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://api.straylight.systems/content/images/2018/09/Eve-Online-05.10.2017---01.50.51.16.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Resupply from The Forge</h5>
                  <p className="card-text">
                    Our logistics team is constantly running the gauntlet to
                    Jita and back to make sure you have what you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container p-0">
            <h1 className="text-center">Not convinced?</h1>
            <p className="lead text-center text-primary pb-4">
              Watch a video. Or three.
            </p>

            <div className="card-deck mb-md-4">
              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://img.youtube.com/vi/JmXC1jmbLWc/maxresdefault.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Who Dares Wins: Derelik</h5>
                  <p className="card-text">
                    In YC120, Who Dares Wins deployed to the Derelik region to
                    join forces with REKKINGCREW. The following few months saw
                    our pilots vaporize nearly five trillion ISK worth of
                    property. This is a window in to what that looked like.
                  </p>
                  <a
                    className="btn btn-outline-primary"
                    href="https://www.youtube.com/watch?v=JmXC1jmbLWc"
                    target="_blank"
                  >
                    Watch now
                  </a>
                </div>
              </div>
            </div>

            <div className="card-deck">
              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://img.youtube.com/vi/b4SfPGib7VQ/maxresdefault.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Straylight Systems Trailer</h5>
                  <p className="card-text">
                    Witness how the Straylight squadron works together to
                    achieve greatness throughout New Eden.
                  </p>
                  <a
                    className="btn btn-outline-primary"
                    href="https://www.youtube.com/watch?v=b4SfPGib7VQ"
                    target="_blank"
                  >
                    Watch now
                  </a>
                </div>
              </div>

              <div className="card bg-dark text-white">
                <img
                  className="card-img-top"
                  src="https://img.youtube.com/vi/diFsV8f-FXY/maxresdefault.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Who Dares Wins Trailer</h5>
                  <p className="card-text">
                    Who Dares Wins, our brotherhood, specializes in mercenary
                    and black ops operations - and the occasional capital
                    slugfest, when the need arises.
                  </p>
                  <a
                    className="btn btn-outline-primary"
                    href="https://www.youtube.com/watch?v=diFsV8f-FXY"
                    target="_blank"
                  >
                    Watch now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Apply
