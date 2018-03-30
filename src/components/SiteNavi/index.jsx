import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/blog/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/blog/" className="nav-link">
                  Blog
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
              </li>
              <li
                className={
                  location.pathname === '/killboard/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://zkillboard.com/corporation/98498664/"
                >
                  Killboard
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default SiteNavi
