import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'

import './style.scss'

class ProtocolMenu extends React.Component {
  render() {
    const { location } = this.props

    let links = []
    let tags = get(this, 'props.tags')
    let slug = get(this, 'props.slug')
    let postTag = get(this, 'props.postTag')

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

    tags.sort((a, b) => a.tag.name.localeCompare(b.tag.name))

    tags.map((data, i) => {
      links.push(
        <li
          key={i + 1}
          className={
            data.tag.slug === slug || data.tag.slug === postTag
              ? 'nav-item active'
              : 'nav-item'
          }
        >
          <Link to={`/protocol/${data.tag.slug}/`} className="nav-link">
            {data.tag.name}
          </Link>
        </li>
      )
    })

    return (
      <div className="ProtocolMenu container p-0">
        <ul className="nav flex-row">{links}</ul>
      </div>
    )
  }
}

export default ProtocolMenu
