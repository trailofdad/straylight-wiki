import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand text-primary mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
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
              <li
                className={
                  location.pathname === '/apply/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/apply/" className="nav-link">
                  Apply
                </Link>
              </li>
              {/* WIP - conditionally display wiki
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Wiki
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#">
                    Doctrines
                  </a>
                  <a className="dropdown-item" href="#">
                    Making ISK
                  </a>
                  <a className="dropdown-item" href="#">
                    Communications
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default SiteNavi
