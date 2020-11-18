import React, { Component } from 'react'
import Routes from './routes'

import './assets/sass/application.scss'
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux'
import { store } from './pages/utils/store'
import "@babel/polyfill";

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}

export default App
