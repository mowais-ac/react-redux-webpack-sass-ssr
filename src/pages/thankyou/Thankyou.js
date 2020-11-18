import React, { Component } from 'react';
import Header from "../components/global/_header";
import Footer from "../components/global/_footer";
import { Container } from 'semantic-ui-react'
import {connect} from "react-redux";
import { LoaderOverlay } from '../components/Reusable'

class Thankyou extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    loadInitial = () => {

    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.loadInitial()
    }

    render() {
        const {} = this.state
        const {} = this.props

        return (
            <div className="main-wrapper">
                <Header/>
                <div className="content-wrap">
                    <Container text>
                        <div className="text-thankyou align-center">
                            <h1>Thank you</h1>
                        </div>
                    </Container>
                </div>

                <Footer/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Thankyou)
