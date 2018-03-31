import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class ReadNext extends React.Component {
  render() {
    const data = this.props.data
    const title = get(data, 'meta.title')
    const author = get(data, 'meta.author')

    return (
      <div className="footer">
        <hr className="border-primary" />
        <p>
          {title}
          <br />
          Watch our{' '}
          <a href="https://www.youtube.com/watch?v=b4SfPGib7VQ" target="_blank">
            2018 Recruitment Trailer.
          </a>
        </p>
      </div>
    )
  }
}

export default ReadNext
