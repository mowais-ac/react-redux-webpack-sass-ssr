import React, { Component } from 'react';
import MegaMenu from "./_megaMenu";
import { Container } from 'semantic-ui-react'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuVisible: false
        }
    }

    megaMenuHandler = () => {
        const { menuVisible } = this.state
        this.setState({
            menuVisible: !menuVisible
        })
    }
    render() {
        const { menuVisible } = this.state
        return (
            <header id="header" className={(menuVisible ? 'menu-visible' : '')}>
                <Container>
                    <div id="logo" className="pull-left">
                        <a href="/">
                            <img src="https://static.bankonus.com/images/logos/logo-white.png?v1" alt="bankonus.com" className="logo"/>
                        </a>
                    </div>
                    {/*<util:langSwitch/>*/}
                    <div className="right-col pull-right">
                        <div className="header-useropt">
                            <ul>
                                <li className="call">
                                    <a href="tel:80022656687" className="btn btn-white btn-sm btn-border">
                                        <span className="mobile hidden lbl flip-right">Talk to an expert</span>
                                        <span className="mobile hidden number ltr-ar flip-left primary-font">800 BANKONUS (22656687)</span>
                                        <i className="mobile only fi flaticon-telephone-handle-silhouette"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="hamburger-wrap" onClick={this.megaMenuHandler}>
                        <div className="hamburger-bars">
                            <span className="bar-1"></span>
                            <span className="bar-2"></span>
                            <span className="bar-3"></span>
                        </div>
                    </div>
                    <nav className={"megamenu-wrap " + (menuVisible ? 'toggled' : '')}>
                        <div className="menuClosebtn" onClick={this.megaMenuHandler}>
                            <i className="fi flaticon-cancel"></i>
                        </div>

                        <MegaMenu visible={menuVisible}/>
                    </nav>
                </Container>
            </header>
        )
    }
}