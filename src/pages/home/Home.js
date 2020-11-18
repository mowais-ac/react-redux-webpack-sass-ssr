import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Container, Grid, Form, Input, Menu, Tab, Icon, Button } from 'semantic-ui-react'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){}
    render () {
        return (
            <main className="main-wrapper transparent-header creditcardIndex-main">
                <h1>Its a quick starter React application with SSR + webpack + Sass + Redux</h1>
            </main>
        )
    }
}

const mapStateToProps = state => {
    const {  } = state
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
