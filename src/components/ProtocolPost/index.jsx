import React from 'react'
import { Link } from 'gatsby'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import size from 'lodash/size'
import Adsense from '../Adsense'
import ReadNext from '../ReadNext'

import './style.scss'

class ProtocolPost extends React.Component {
  more(path) {
    return (
      <Link className="readmore" to={path}>
        <span className="btn btn-outline-primary btn-block">MORE</span>
      </Link>
    )
  }

  isMore(body) {
    return body.match('<!--more-->')
  }

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

  categories(data, isFeatured) {
    const categories = []
    forEach(data, (item, i) => {
      categories.push(
        <small className="text-primary text-uppercase px-1" key={i}>
          {item.name}
        </small>
      )
    })

    if (isFeatured)
      categories.push(
        <small className="text-primary text-uppercase px-1" key="-1">
          Featured
        </small>
      )
    return categories
  }

  render() {
    const { site, data, isIndex, author } = this.props
    const title = get(data, 'title')
    const path = `/protocol/${get(data, 'slug')}`
    const date = get(data, 'published_at')
    const html = get(data, 'html')
    const description = this.description(html)
    const tags = get(data, 'tags')
    const isMore = isIndex && !!html.match('<!--more-->')
    const isFeatured = get(data, 'featured')
    const ad = isIndex ? (
      ''
    ) : (
      <Adsense clientId={site.meta.adsense} slotId="" format="auto" />
    )

    return (
      <div className="container p-0">
        <div className="articles">
          <div className="article-wrap article-wrap-protocol" key={path}>
            <div className="page-header">
              <Link style={{ boxShadow: 'none' }} to={path}>
                <h1>{title}</h1>
              </Link>
              <img className="author-image" src={author.profile_image} />
              <small className="author">{author ? author.name : ''}</small>
              <time dateTime={date}>{date}</time>
              {this.categories(tags, isFeatured)}
            </div>
            {ad}
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: isMore ? description : html }}
            />
            {isMore ? this.more(path) : ''}
            {ad}
            {isIndex ? '' : <ReadNext data={site} />}
          </div>
        </div>
      </div>
    )
  }
}

export default ProtocolPost
