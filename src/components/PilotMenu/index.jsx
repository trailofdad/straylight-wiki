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
          href="#"
          id="dropdown01"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="d-none d-md-inline d-lg-inline d-xl-inline">
            {pilotName}
          </span>
          <span className="d-inline d-md-none d-lg-none d-xl-none">Me</span>
        </a>
        <div className="dropdown-menu bg-dark" aria-labelledby="dropdown01">
          <a
            className="dropdown-item"
            href={`https://zkillboard.com/character/${pilotId}/`}
            target="_blank"
          >
            My Dashboard
          </a>
          <div className="dropdown-divider" />
          <a
            className="dropdown-item"
            href="https://mgmt.straylight.systems"
            target="_blank"
          >
            Corp Services
          </a>
          <a
            className="dropdown-item"
            href="https://auth.whodareswins.space"
            target="_blank"
          >
            Alliance Services
          </a>
          <a
            className="dropdown-item"
            href="ts3server://voice.whodareswins.space"
            target="_blank"
          >
            Alliance Comms
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#" onClick={logout}>
            Logout
          </a>
        </div>
      </li>
    )
  }
}

export default PilotMenu
