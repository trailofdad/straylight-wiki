import AuthApi from './auth'

const Session = {
  state: {},

  protectRoutes() {
    if (window && window.location.href.includes('protocol'))
      window.location.href = '/'
  },

  async initialize() {
    let authResponse

    try {
      authResponse = await AuthApi.get('/whoami')
    } catch (e) {
      this.protectRoutes()
    }

    if (
      authResponse &&
      authResponse.status === 200 &&
      authResponse.data &&
      authResponse.data.isStraylight
    ) {
      // Not a React component, can't use setState()
      this.state = {
        ...authResponse.data,
        isInitialized: true,
      }
    } else {
      this.protectRoutes()
    }

    return
  },
}

export default Session
