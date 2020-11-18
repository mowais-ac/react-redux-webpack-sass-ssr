import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'

export default class MegaMenu extends Component {

    render() {
        return (

            <div className="megamenu-inner">
                <div className="mm-row-1">
                    <div className="mm-header">
                        <Container>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <div className="mm-logo">
                                            <a href="/"><img src="https://s3.eu-central-1.amazonaws.com/bankonus.com/assets/images/logos/logo-transparent-xs.png" alt="BankOnUs"/></a>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={8}></Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </div>
                    <div className="top-products-menu">
                        <Container>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8} className="prdCat-sec-col">
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column width={8}>
                                                    <h2>Insurance</h2>
                                                    <div className="mainmenu-link">
                                                        <ul className="no-list">
                                                            <li className="prd-car"><a href="/insurance/en/car">Car Insurance</a></li>
                                                            <li className="prd-health"><a href="/insurance/en/health">Health Insurance</a></li>
                                                            <li className="prd-life"><a href="/insurance/en/life">Life Insurance</a></li>
                                                            <li className="prd-termlife"><a href="/insurance/en/life">Term Life Plans</a></li>
                                                        </ul>
                                                        <div className="provider-link">
                                                            <a href="/insurance/en/providers" className="link-arrow">View all insurance providers <i className="fi flaticon-right-arrow"></i></a>
                                                        </div>
                                                        <div className="mm-article-link">
                                                            <h4 className="h6 regular hidden-xs">Grow your insurance knowledge</h4>
                                                            <a href="/finance-expert/en/insurance/" className="link-arrow">Start reading articles <i className="fi flaticon-right-arrow"></i></a>
                                                        </div>
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <div className="quick-links-col hidden-xs">
                                                        <h4 className="regular quickLinks">Quick links</h4>
                                                        <div className="quick-links-wrap">
                                                            <div className="quick-links-box">
                                                                <h6 className="title">Health Insurance</h6>
                                                                <ul className="no-list">
                                                                    <li><a href="/insurance/en/health/individuals">Individuals</a></li>
                                                                    <li><a href="/insurance/en/health/domestic-workers">Domestic workers</a></li>
                                                                    <li><a href="/insurance/en/health">Small business</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="quick-links-box">
                                                                <h6 className="title">Life Insurance</h6>
                                                                <ul className="no-list">
                                                                    <li><a href="/insurance/en/life?type=term-policy">Term Life Plans</a></li>
                                                                    <li><a href="/insurance/en/life/savings">Savings Plans</a></li>
                                                                    <li><a href="/insurance/en/life?type=enquire-policy">Whole of Life Plans</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Grid.Column>
                                    <Grid.Column width={8} className="prdCat-sec-col">
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <h2>Banking</h2>
                                                <div className="mainmenu-link">
                                                    <ul className="no-list">
                                                        <li className="prd-creditcard"><a href="/en-ae/bank/credit-cards">Credit Cards</a></li>
                                                        <li className="prd-carloan"><a href="/en-ae/bank/car-loans">Car Loans</a></li>
                                                        <li className="prd-personalloan"><a href="/en-ae/bank/personal-loans">Personal Loans</a></li>
                                                        <li className="prd-bankaccount"><a href="/en-ae/bank/accounts">Bank Accounts</a></li>
                                                        <li className="prd-mortgageloan"><a href="/en-ae/bank/home-loans">Home Loans</a></li>
                                                        <li className="prd-mortgagedebt"><a href="https://landing.bankonus.com/find-your-freedom-from-debt">Debt Restructuring</a></li>
                                                    </ul>
                                                    <div className="provider-link">
                                                        <a href="/en-ae/bank/all" className="link-arrow">View all banking providers <i className="fi flaticon-right-arrow"></i></a>
                                                    </div>
                                                    <div className="mm-article-link">
                                                        <h4 className="h6 regular hidden-xs">Grow your banking knowledge</h4>
                                                        <a href="/finance-expert/en/financial-management/" className="link-arrow">Start reading articles <i className="fi flaticon-right-arrow"></i></a>
                                                    </div>
                                                </div>
                                            </Grid.Column>
                                            <Grid.Column width={8} className="quick-links-col">
                                                <h4 className="regular quickLinks">Quick links</h4>
                                                <div className="quick-links-wrap">
                                                    <div className="quick-links-box">
                                                        <h6 className="title">Credit Card Benefits</h6>
                                                        <ul className="no-list">
                                                            <li><a href="/en-ae/bank/credit-cards/airmiles">Airmiles</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/airport-lounge">Airport Lounge</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/balance-transfer">Balance Transfer</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/cashback">Cashback</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/dining">Dining</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/easy-payment-plan">Easy Payment Plan</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/free-for-life">Free for Life</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/golf">Golf</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/movies">Movies</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/points">Points</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/travel-cards">Travel Credit Card</a></li>
                                                            <li><a href="/en-ae/bank/credit-cards/valet-parking">Valet Parking</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </div>
                </div>
                <div className="mm-row-2 applinks-menu-bar">
                    <Container>
                        <div className="dp-table marginauto">
                            <div className="src-components-Common-MobileApp--styles nav-mobile-app center">
                                <div className="button-group app-download-btns xs-marginauto clearfix">
                                    <a href="https://apps.apple.com/us/app/bankonus/id1474981766" target="_blank" className="pull-left dp-block">
                                        <span className="sprite-app-ios-black marginauto"></span>
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.bankonus" target="_blank" className="pull-left dp-block ml-10">
                                        <span className="sprite-app-android-black marginauto"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}