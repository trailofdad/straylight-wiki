import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'

import AuthApi from '../../services/auth'
import PilotMenu from '../PilotMenu'

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
    let authOrProtocolLink, applyLink, pilotName

    let isAuthorized = session && session.isStraylight

    // TODO: abstract to components
    if (isAuthorized) {
      pilotName = session.name

      authOrProtocolLink = (
        <li
          className={
            location.pathname === '/protocol/' ? 'nav-item active' : 'nav-item'
          }
        >
          <Link to="/protocol/" className="nav-link">
            Protocol
          </Link>
        </li>
      )
    } else {
      authOrProtocolLink = (
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
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand text-primary mb-0 d-none d-md-block d-lg-block d-xl-block">
              {title}
            </h1>
            <h1 className="navbar-brand text-primary mb-0 d-block d-md-none d-lg-none d-xl-none">
              S-RUN
            </h1>
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

              {authOrProtocolLink}
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <PilotMenu
              isAuthorized={isAuthorized}
              pilotName={pilotName}
              logout={this.logout}
            />
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
