import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {history} from "./pages/components/helpers/history";
// import PrivateRoute from './PrivateRoute'
import {LoaderOverlay} from './pages/components/Reusable'

// General pages
const Home = lazy(() => import ('./pages/home/Home'))
const Thankyou = lazy(() => import ('./pages/thankyou/Thankyou'))
class Routes extends Component {
    render () {
        return (
            <BrowserRouter history={history} >
                <Suspense fallback={<LoaderOverlay/>}>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/:thankyou' component={Thankyou} exact />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        )
    }
}

export default Routes