import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import sortBy from 'lodash/sortBy'

import { siteMetadata } from '../../../gatsby-config'

import SiteSlide from '../SiteSlide'

class Index extends React.Component {
  render() {
    const pageLinks = []

    const posts = get(this, 'props.posts')

    const sortedPosts = sortBy(posts, post =>
      get(post, 'post.frontmatter.date')
    ).reverse()

    sortedPosts.forEach((data, i) => {
      const layout = get(data, 'post.frontmatter.layout')
      const path = get(data, 'post.path')
      if (layout === 'post' && path !== '/404/') {
        pageLinks.push(<SiteSlide data={data.post} isIndex={true} key={i} />)
      }
    })

    return (
      <div>
        <Helmet
          title={`${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: 'Straylight Systems' },
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

        <video autoPlay muted loop className="flash-trailer">
          <source src={`/mp4/blackout.mp4`} type="video/mp4" />
        </video>

        <div className="flash-overlay" />

        <section style={{ paddingTop: 0 }}>
          <div id="hero_carousel" className="carousel slide">
            <ol className="carousel-indicators">
              <li
                data-target="#hero_carousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#hero_carousel" data-slide-to="1" />
              <li data-target="#hero_carousel" data-slide-to="2" />
              <li data-target="#hero_carousel" data-slide-to="3" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container p-0 my-3 my-lg-5 text-center">
                  <h1 className="tagline">New Eden is a harsh place</h1>
                  <p className="lead text-primary">
                    The friends beside you can make it easier.
                  </p>

                  <div>
                    <a
                      href="http://whodareswins.space/blackout"
                      className="btn btn-outline-light"
                      target="_blank"
                    >
                      Watch the new video
                    </a>
                    <a
                      href="/apply"
                      className="btn btn-outline-primary ml-1 ml-md-3"
                      target="_self"
                    >
                      Learn about Straylight
                    </a>
                  </div>
                </div>
              </div>

              {pageLinks}
            </div>
            <a
              className="carousel-control-prev"
              href="#hero_carousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#hero_carousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>

        <section>
          <div className="container p-0">
            <div className="card-deck">
              <div className="card bg-dark text-white">
                <img className="card-img-top" src="/img/f_0018d3.jpg" />
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
                  src="/img/vlcsnap-2019-07-22-21h19m59s783-2.png"
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
                <img className="card-img-top" src="/img/f_0018e1.jpg" />
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
