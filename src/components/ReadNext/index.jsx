import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import './style.scss'

class ReadNext extends React.Component {
  render() {
    const data = this.props.data
    const title = get(data, 'meta.title')

    return (
      <div className="footer mt-5">
        <hr className="border-primary" />
        <p>
          {title}
          <br />
          Watch our latest video:{' '}
          <a href="http://whodareswins.space/blackout" target="_blank">
            Who Dares Wins: Blackout
          </a>
        </p>
      </div>
    )
  }
}

export default ReadNext
