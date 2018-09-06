import React from 'react'
import Link from 'gatsby-link'

import get from 'lodash/get'

class ProtocolCard extends React.Component {
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

  render() {
    const { site, data, isIndex, author } = get(this, 'props')

    const html = get(data, 'html')
    const slug = get(data, 'slug')
    const title = get(data, 'title')
    const tags = get(data, 'tags')
    const date = get(data, 'published_at')
    const featured = get(data, 'featured')

    const description = this.description(html)
    const path = `/protocol/${slug}`

    return (
      <Link style={{ boxShadow: 'none' }} to={path}>
        <div className="card bg-dark text-white">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="d-flex justify-content-between">
              <button className="btn btn-sm btn-outline-primary">
                Read more
              </button>

              <img className="author-image" src={author.profile_image} />
            </div>
          </div>

          <div className="card-footer text-muted">
            <div className="d-flex flex-row justify-content-between">
              <small>
                {tags.length ? `Posted in ${tags[0].name}` : ''}
                {featured ? `Featured post` : ''}
              </small>

              <small>{date}</small>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default ProtocolCard
