import React from 'react'

import './style.scss'

class PilotMenu extends React.Component {
  render() {
    const { isAuthorized, pilotName, pilotId, logout } = this.props

    if (!isAuthorized) {
      return (
        <li className="nav-item">
          <a
            href={process.env.AUTH_URL + '/authorize'}
            className="nav-link"
            target="_self"
          >
            Login
          </a>
        </li>
      )
    }

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
        <div className="dropdown-menu bg-dark" aria-labelledby="dropdown01">
          <a
            className="dropdown-item"
            href={`https://zkillboard.com/character/${pilotId}/`}
            target="_blank"
          >
            My kills
          </a>
          <a
            className="dropdown-item"
            href="https://mgmt.straylight.systems"
            target="_blank"
          >
            Launch SEAT
          </a>
          <a
            className="dropdown-item"
            href="ts3server://voice.straylight.systems"
            target="_blank"
          >
            Launch TS3
          </a>
          <a className="dropdown-item" href="#" onClick={logout}>
            Logout
          </a>
        </div>
      </li>
    )
  }
}

export default PilotMenu
