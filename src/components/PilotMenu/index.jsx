import React from 'react'
import axios from 'axios'

import './style.scss'

class PilotMenu extends React.Component {
  render() {
    const { isAuthorized, pilotName, logout } = this.props

    if (!isAuthorized) return null

    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="http://example.com"
          id="dropdown01"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {pilotName}
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdown01">
          <a className="dropdown-item" href="#" onClick={logout}>
            Logout
          </a>
        </div>
      </li>
    )
  }
}

export default PilotMenu
