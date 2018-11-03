import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'
import AuthApi from '../../services/auth'

class Dashboard extends React.Component {
  componentWillMount() {
    AuthApi.get('/dashboard')
      .then(response => {
        let payload = response.data

        this.setState(payload)
      })
      .catch(() => {
        this.setState({
          error: 'You must be logged in to access the pilot dashboard.',
        })
      })
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Dashboard'

    let renderedContent = <p className="lead text-muted">Verifying access...</p>

    if (this.state && this.state.error) {
      renderedContent = (
        <div>
          <h1>Access Denied</h1>
          <p className="lead text-muted">{this.state.error}</p>
        </div>
      )
    } else if (this.state && this.state.session) {
      let months = Object.values(this.state.statistics.months)
      let {
        iskDestroyed = 0,
        iskLost = 0,
        shipsDestroyed = 0,
        shipsLost = 0,
      } = months[months.length - 1]

      let corpMonths = Object.values(this.state.corporation.months)
      let {
        iskDestroyed: corpIskDestroyed = 0,
        iskLost: corpIskLost = 0,
      } = corpMonths[corpMonths.length - 1]

      let statCards = []
      let stats = [
        {
          key: 'ISK destroyed',
          value: `${(iskDestroyed / 1000000000).toFixed(2)}B`,
        },
        {
          key: 'ISK lost',
          value: `${(iskLost / 1000000000).toFixed(2)}B`,
        },
        { key: 'ships destroyed', value: shipsDestroyed },
        { key: 'ships lost', value: shipsLost },
        {
          key: 'your efficiency',
          value: `${((1 - iskLost / iskDestroyed) * 100).toFixed(1)}%`,
        },
        {
          key: 'corp efficiency',
          value: `${((1 - corpIskLost / corpIskDestroyed) * 100).toFixed(1)}%`,
        },
      ]

      stats.map((data, i) => {
        statCards.push(
          <div className="card card-statistic bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">{data.value}</h5>
              <p className="card-text">{data.key}</p>
            </div>
          </div>
        )
      })

      let opCards = []
      let operations = this.state.operations.filter(operation => {
        if (
          !operation.is_cancelled &&
          new Date() < new Date(operation.start_at.date)
        )
          return operation
      })

      operations.sort(
        (a, b) => new Date(a.start_at.date) - new Date(b.start_at.date)
      )
      operations = operations.slice(0, 3)

      if (operations) {
        operations.map((data, i) => {
          opCards.push(
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                  {data.description.substring(0, 128)}
                  ...
                </p>
                <div className="d-flex justify-content-between">
                  <a
                    href="https://auth.whodareswins.space/calendar/operation"
                    target="_blank"
                  >
                    <button className="btn btn-sm btn-outline-primary">
                      Respond to {data.fc}
                    </button>
                  </a>

                  <img
                    className="author-image"
                    src={`https://imageserver.eveonline.com/Character/${
                      data.fc_character_id
                    }_128.jpg`}
                  />
                </div>
              </div>

              <div className="card-footer text-muted">
                <div className="d-flex flex-row justify-content-between">
                  <small>{data.staging_sys}</small>

                  <small>{new Date(data.start_at.date).toDateString()}</small>
                </div>
              </div>
            </div>
          )
        })
      } else {
        opCards.push(<p>No operations posted at this time.</p>)
      }

      let doctrines = this.state.doctrines
      let fleets = []
      let fleetCards = []

      if (doctrines) {
        doctrines.map(doctrine => {
          let { description, name, data } = doctrine
          let fleet = {
            description,
            name,
            fittings: [],
          }

          let fitNames = Object.keys(data)
          let fitFlags = Object.values(data)

          fitNames.map((name, index) => {
            let fitting = {
              name,
              ship: fitFlags[index].ship,
              fit: fitFlags[index].fit,
            }

            fleet.fittings.push(fitting)
          })

          let allFitValues = {
            true: 0,
            false: 0,
          }

          // Too lazy to import lodash
          fleet.fittings.map(fitting => {
            if (fitting.ship) {
              allFitValues.true++
            } else {
              allFitValues.false++
            }

            if (fitting.fit) {
              allFitValues.true++
            } else {
              allFitValues.false++
            }
          })

          if (fleet.name === 'GOLD WING' && allFitValues.true >= 2) {
            fleet.readiness = 1
          } else {
            fleet.readiness =
              allFitValues.true / (allFitValues.true + allFitValues.false)
          }

          fleets.push(fleet)
        })
      }

      fleets.map(fleet => {
        fleetCards.push(
          <div className="card card-statistic bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">{fleet.readiness * 100}%</h5>
              <p className="card-text">
                {fleet.name}
                <br />
                <small class="text-muted text-uppercase">
                  {fleet.description}
                </small>
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="https://auth.whodareswins.space/fitting/doctrine"
                  target="_blank"
                >
                  <button className="btn btn-sm btn-outline-primary">
                    View details
                  </button>
                </a>
              </div>
            </div>
          </div>
        )
      })

      renderedContent = (
        <div>
          <h1>Dashboard</h1>
          <p className="lead text-muted">
            Good day, {this.state.session.name}.<br />
          </p>

          <h3 className="text-muted mt-4 pt-4 pb-4">Monthly performance</h3>
          <div className="container p-0">
            <div className="card-columns">{statCards}</div>
          </div>

          <h3 className="text-muted mt-4 pt-4 pb-4">Upcoming operations</h3>
          <div className="container p-0">
            <div className="card-deck">{opCards}</div>
          </div>

          <h3 className="text-muted mt-4 pt-4 pb-4">Doctrine coverage</h3>
          <div className="container p-0">
            <div className="card-deck">{fleetCards}</div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/about`,
            },
            {
              property: 'og:image',
              content: `${get(siteMetadata, 'siteUrl')}/img/about.jpg`,
            },
          ]}
        />
        <section>
          <div className="container p-0">{renderedContent}</div>
        </section>
      </div>
    )
  }
}

export default Dashboard
