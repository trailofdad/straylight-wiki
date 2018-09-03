import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'

import './style.scss'

class ProtocolMenu extends React.Component {
  render() {
    let links = []
    let tags = get(this, 'props.tags')
    let slug = get(this, 'props.slug')

    if (!tags || !tags.length) return null

    links.push(
      <li
        key="0"
        className={
          location.pathname === '/protocol/' ? 'nav-item active' : 'nav-item'
        }
      >
        <Link to="/protocol/" className="nav-link">
          Everything
        </Link>
      </li>
    )

    tags.map((data, i) => {
      links.push(
        <li
          key={i + 1}
          className={data.tag.slug === slug ? 'nav-item active' : 'nav-item'}
        >
          <Link to={`/protocol/${data.tag.slug}/`} className="nav-link">
            {data.tag.name}
          </Link>
        </li>
      )
    })

    return (
      <div className="container p-0 mb-5">
        <ul className="nav flex-row justify-content-center">{links}</ul>
      </div>
    )
  }
}

export default ProtocolMenu
