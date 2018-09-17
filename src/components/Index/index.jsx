import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import sortBy from 'lodash/sortBy'
import LazyLoad from 'react-lazyload'

import { siteMetadata } from '../../../gatsby-config'

import SiteSlide from '../SiteSlide'

class Index extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Straylight Systems'

    const pageLinks = []

    const posts = get(this, 'props.posts')

    const sortedPosts = sortBy(posts, post =>
      get(post, 'post.frontmatter.date')
    ).reverse()

    sortedPosts.forEach((data, i) => {
      const layout = get(data, 'post.frontmatter.layout')
      const path = get(data, 'post.path')
      if (layout === 'post' && path !== '/404/') {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <SiteSlide data={data.post} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

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
        <section style={{ paddingTop: 0 }}>
          <div
            id="hero_carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#hero_carousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#hero_carousel" data-slide-to="1" />
              <li data-target="#hero_carousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container p-0 my-3 my-lg-5 text-center">
                  <h1 class="tagline">A squadron worth fighting for</h1>
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
