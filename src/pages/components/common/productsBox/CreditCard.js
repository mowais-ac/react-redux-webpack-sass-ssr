import React, { Component } from "react";
import { Grid, Icon, Button, Image} from 'semantic-ui-react'
import {connect} from "react-redux";
import './item.scss'

import Http from "../../../utils/Http";
import {SUBMIT_CREDITCARDS} from "../../../redux/constants/api";
import {applicationTab} from "../../Reusable";
import {ccSwitchTab} from "../../../redux/actions/cctab-switch-actions";
import {getCCStepsController} from "../../../redux/actions/ccStepsController-get-actions";

class CreditCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            submitting: false
        }

    }

    creditCardSelectHandler = () => {
        this.setState({submitting: true})

        const { personalInformationVerify, creditcard } = this.props
        const applicationRef = personalInformationVerify.data.params.application_ref
        const params = {
            ccSlug: creditcard.slug,
            applicationRef: applicationRef
        }
        Http.post(SUBMIT_CREDITCARDS + params.applicationRef + '?ccSlug=' + creditcard.slug).then((response) => {
            const data = response.data
            this.setState({submitting: false})
            if(data.success){
                let stepsController = this.props.ccStepsControllerGet.data
                stepsController.is_success_creditcard_select=true
                this.props.getCCStepsController(getCCStepsController(stepsController))

                let switchTab = this.props.getSwitchTab.data
                switchTab.activeTab = applicationTab.STATUS
                this.props.ccSwitchTab(ccSwitchTab(switchTab))
            }
        })
    }

    render() {
        const {creditcard, creditcardsSubmit, creditcardSelect, selected} = this.props
        const { submitting } = this.state
        const isSameCreditcard = creditcardSelect.data.creditcard.length && creditcard.slug === creditcardSelect.data.creditcard[0].slug

        const getTwoTags = creditcard.tags.splice(0, 2)
        console.log(getTwoTags)

        return (
            <div className="item-row creditcard-row">
                <div className="box">
                    <div className="row-1 flexbox flex-center noflex-xs">
                        <div className="column-title-thumb">
                            <div className="inner flexbox flex-center jc-center noflex-xs">
                                <div className="frow middle-xs">
                                    <div className="fcol-md-12 fcol-sm-12 fcol-xs-3">
                                        <div className="thumb marginauto flexbox flex-center jc-center">
                                            <Image src={creditcard.image} alt={creditcard.name} className="marginauto dp-table"/>
                                        </div>
                                    </div>
                                    <div className="fcol-md-12 fcol-sm-12 fcol-xs-9">
                                        <h4 className="title regular align-center">{creditcard.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-features">
                            <Grid className="no-cellpadding">
                                <Grid.Row>
                                    <Grid.Column computer={4} mobile={8}>
                                        <div className="attr">
                                            <div className="lbl">Min. salary</div>
                                            <div className="value">AED {creditcard.minSalary}</div>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column computer={4} mobile={8}>
                                        <div className="price-col attr">
                                            <div className="lbl">Annual fee</div>
                                            <div className="value">
                                                Free
                                            </div>
                                        </div>
                                    </Grid.Column>
                                    {getTwoTags.map((tag) => {
                                        return (
                                            <React.Fragment>
                                                <Grid.Column computer={4} mobile={8}>
                                                    <div className="attr">
                                                        <div className="lbl">{tag.name}</div>
                                                        <div className="value">
                                                            <i className="fi flaticon-right"/>
                                                        </div>
                                                    </div>
                                                </Grid.Column>
                                            </React.Fragment>
                                        )
                                    })}
                                </Grid.Row>
                            </Grid>
                        </div>
                        <div className="column-apply flexbox flex-center align-center">
                            <div className="button-group nomargin full-w">
                                <Button
                                    className={"quick-apply-btn  fluid " + (isSameCreditcard || selected ? 'btn-grd-success' : 'btn-grd-1')}
                                    size={'huge'}
                                    loading={submitting}
                                    disabled={isSameCreditcard || selected}
                                    onClick={this.creditCardSelectHandler}
                                >{isSameCreditcard || selected ? (
                                    <React.Fragment><i className="fi flaticon-checked"/> Selected</React.Fragment>
                                ) : 'Select'}</Button>
                                {/*<a href="" className="ui button bc1lightest fluid">View Details <i className="fi flaticon-down-arrow"/></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { ccTabSwitchReducer, verifyPersonalInformationReducer, getCCStepsControllerReducer, selectCreditcardReducer } = state
    return {
        personalInformationVerify: verifyPersonalInformationReducer,
        getSwitchTab: ccTabSwitchReducer,
        ccStepsControllerGet: getCCStepsControllerReducer,
        creditcardSelect: selectCreditcardReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ccSwitchTab: (data) => dispatch(data),
        getCCStepsController: (data) => dispatch(data),
        selectCreditcard: (data) => dispatch(data),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard)