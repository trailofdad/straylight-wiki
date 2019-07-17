import React from 'react'
import { Link } from 'gatsby'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import size from 'lodash/size'
import Adsense from '../Adsense'
import ReadNext from '../ReadNext'
import './style.scss'

class SiteSlide extends React.Component {
  description(body) {
    let test = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
    if (test.match('<!--more-->')) {
      test = test.split('<!--more-->')
      if (typeof test[0] !== 'undefined') {
        return test[0]
      }
    }
    return test
  }

  categories(data) {
    const categories = []
    forEach(data, (item, i) => {
      categories.push(
        <small className="text-primary text-uppercase px-1" key={i}>
          {item}
        </small>
      )
    })
    return categories
  }

  render() {
    const { site, data, isIndex } = this.props
    const title = get(data, 'frontmatter.title')
    const path = get(data, 'frontmatter.path')
    const date = get(data, 'frontmatter.date')
    const html = get(data, 'html')
    const description =
      get(data, 'frontmatter.description') || this.description(html)
    const cate =
      get(data, 'frontmatter.category') || get(data, 'frontmatter.categories')
    const isMore = isIndex && !!html.match('<!--more-->')
    const ad = isIndex ? (
      ''
    ) : (
      <Adsense clientId={site.meta.adsense} slotId="" format="auto" />
    )

    return (
      <div className="carousel-item">
        <div className="container p-0 my-3 my-lg-5">
          <Link style={{ boxShadow: 'none', display: 'block' }} to={path}>
            <h1>{title}</h1>
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {/* <p className="date">
              {date}
            </p> */}
          </Link>
        </div>
      </div>
    )
  }
}

export default SiteSlide
