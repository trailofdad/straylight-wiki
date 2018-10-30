import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'

import AuthApi from '../../services/auth'
import PilotMenu from '../PilotMenu'

import get from 'lodash/get'

import './style.scss'

const deauth = () => {
  window.location.href = '/'
}

class SiteNavi extends React.Component {
  logout() {
    AuthApi.get('/logout')
      .then(deauth)
      .catch(deauth)
  }

  render() {
    const { location, title, session } = this.props
    let protocolLink, applyLink, pilotName, pilotId

    let isAuthorized = session && session.isStraylight

    // TODO: abstract to components
    if (isAuthorized) {
      pilotName = get(session, 'name')
      pilotId = get(session, 'character_id')

      protocolLink = (
        <li
          className={
            location.pathname.includes('/protocol/')
              ? 'nav-item active'
              : 'nav-item'
          }
        >
          <Link to="/protocol/" className="nav-link">
            Protocol
          </Link>
        </li>
      )
    } else {
      applyLink = (
        <li
          className={
            location.pathname === '/apply/' ? 'nav-item active' : 'nav-item'
          }
        >
          <Link to="/apply/" className="nav-link">
            Apply
          </Link>
        </li>
      )
    }

    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bg-primary">
        <Link
          className="text-center d-block d-md-none d-lg-none d-xl-none"
          to="/"
        >
          <h1 className="navbar-brand text-primary mb-0">STRAYLIGHT</h1>
        </Link>
        <div className="container">
          <Link
            className="text-center d-none d-md-block d-lg-block d-xl-block"
            to="/"
          >
            <h1 className="navbar-brand text-primary mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row mr-auto">
              <li
                className={
                  location.pathname === '/journal/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/journal/" className="nav-link">
                  Journal
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/origin/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/origin/" className="nav-link">
                  Origin
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://zkillboard.com/corporation/98498664/"
                  className="nav-link"
                  target="_blank"
                >
                  Kills
                </a>
              </li>

              {applyLink}

              {protocolLink}
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-flex">
            <PilotMenu
              isAuthorized={isAuthorized}
              pilotName={pilotName}
              pilotId={pilotId}
              logout={this.logout}
            />
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
