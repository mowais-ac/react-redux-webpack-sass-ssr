import React, { Component } from 'react';
import Header from "../components/global/_header";
import Footer from "../components/global/_footer";
import { Container } from 'semantic-ui-react'
import {connect} from "react-redux";
import {LoaderOverlay} from '../components/Reusable'
import thankyou from '../../assets/images/thank-you.svg'

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
        const {activeIndex, isFetchingApplication} = this.state
        const { getSwitchTab, ccStepsControllerGet, successPersonalInfo, successEmploymentInfo } = this.props

        return (
            <div className="main-wrapper transparent-header cc-onlineApplication-main">
                <Header/>
                <div className="content-wrap">
                    {isFetchingApplication ? (
                        <LoaderOverlay/>
                    ) : ''}
                    <div className="top-bg top-bar creditcard-bg"></div>
                    <div className="cc-onlineApplication-wrap">
                        <div className="additional-form-section section-padding-xxl white-bg">
                            <Container text>
                                <div className="text-thankyou align-center">
                                    <div className="thankyou"><img src={thankyou} alt=""/></div>
                                    <h1>Thank you</h1>
                                    <h5>Your credit card application has been submitted successfully.</h5>
                                    <p>We have received your enquiry and our expert advisor will contact you within 24 hours. If you have any query, please call us on <a href="tel:80022656687" class="ltr-ar dp-inline-block">800BANKONUS (22656687)</a>.</p>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { ccTabSwitchReducer, verifyPersonalInformationReducer, verifyEmploymentDetailReducer, getDocumentsReducer, getCCStepsControllerReducer, verifyLiabilityDetailsReducer, selectCreditcardReducer, verifyCcAdditionalDetailsReducer } = state
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thankyou)
