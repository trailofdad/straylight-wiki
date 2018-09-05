import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import emergence from 'emergence.js'

import './gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon-2.2/devicon.min.css'
import 'font-awesome/css/font-awesome.css'

import SiteNavi from '../components/SiteNavi'
import Session from '../services/session'

class Template extends React.Component {
  async componentDidMount() {
    emergence.init()

    await Session.initialize()

    this.setState(Session.state)
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children } = this.props

    return (
      <div className={location.pathname === '/' ? 'with-background' : ''}>
        <SiteNavi
          session={this.state}
          title={siteMetadata.title}
          {...this.props}
        />
        {this.state ? children() : ''}
      </div>
    )
  }
}

export default Template
