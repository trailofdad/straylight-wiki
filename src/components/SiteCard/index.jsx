import React from 'react'
import Link from 'gatsby-link'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import size from 'lodash/size'
import Adsense from '../Adsense'
import ReadNext from '../ReadNext'
import './style.scss'

class SiteCard extends React.Component {
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
      <Link style={{ boxShadow: 'none', display: 'block' }} to={path}>
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

              {/* <img className="author-image" src={author.profile_image} /> */}
            </div>
          </div>

          <div className="card-footer text-muted">
            <div className="d-flex flex-row justify-content-between">
              {this.categories(cate)}

              <small>{date}</small>
            </div>
          </div>
        </div>
      </Link>
      // <div className="container p-0">
      //   <div className="articles">
      //     <div className="article-wrap" key={path}>
      //       <div className="page-header">
      //         <Link style={{ boxShadow: 'none' }} to={path}>
      //           <h1>{title}</h1>
      //           <time dateTime={date}>{date}</time>
      //         </Link>
      //         {this.categories(cate)}
      //       </div>
      //       {ad}
      //       <div
      //         className="page-content"
      //         dangerouslySetInnerHTML={{ __html: isMore ? description : html }}
      //       />
      //       {isMore ? this.more(path) : ''}
      //       {ad}
      //       {isIndex ? '' : <ReadNext data={site} />}
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default SiteCard
