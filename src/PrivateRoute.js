import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'

import PageLoader from './pages/components/loaders/PageLoader'

const PrivateRoute = ({ component: Component, loggedIn, authenticating, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (!loggedIn && !authenticating) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    } else if (loggedIn && !authenticating) {
      return (
        <Component {...props} />
      )
    } else {
      return <Route render={() => <PageLoader authenticating={authenticating} />} />
    }
  }} />
)

// const mapStateToProps = (state) => {
//   const { loggedIn, authenticating } = state.authentication
//   const { verifying } = state.register
//   return {
//     loggedIn,
//     authenticating,
//     verifying
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUser: (data) => dispatch(data)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

export default PrivateRoute
