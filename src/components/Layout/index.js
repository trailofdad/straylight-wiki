import React from 'react'
import { siteMetadata } from '../../../gatsby-config'

import './gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon-2.2/devicon.min.css'
import 'font-awesome/css/font-awesome.css'

import SiteNavi from '../SiteNavi'
import Session from '../../services/session'

class Layout extends React.Component {
  async componentWillMount() {
    try {
      await Session.initialize()
    } catch (e) {
      console.error(e)
    }

    if (Session && Session.state) this.setState(Session.state)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <SiteNavi
          session={this.state}
          title={siteMetadata.title}
          {...this.props}
        />
        {children}
      </div>
    )
  }
}

export default Layout
