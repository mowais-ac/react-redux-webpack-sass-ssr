import React, {Component} from 'react';
import {Routse} from 'react-router-dom';
import {connect } from "react-redux";
import {user} from "./pages/redux/actions/authentication-actions";
import PrivateRoute from "./PrivateRoute";

// General pages
import Home from "./pages/home/Home";

class PrivateRoutes extends Component {
    constructor(props) {
        super(props);
        this.checkAuthentication();
    }

    checkAuthentication = () => {
        this.props.getUser(user());
    };
    render() {
        return(
            <div>
                <Route exact path="/" component={Home}/>
                {/*<PrivateRoute exact path="/" component={Home}/>*/}
                <Route path={"/blog/write-for-us"} component={BlogWriteForUs}/>
                <Route path={"/registered/"} component={SignupDone}/>
                <Route path={"/verify/:verify_id/:verify_token"} component={EmailVarification}/>

                {/*<Route path={"/signup"} component={UserSignup}/>*/}
                {/*<Route path={"/login"} component={UserLogin}/>*/}
                {/*<Route path="/profile/dashboard" component={TutorDashboard}/>*/}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { loggedIn, authenticating } = state.authentication;
    return {
        loggedIn,
        authenticating
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (data) => dispatch(data)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);

