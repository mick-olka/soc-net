
import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

export const WithAuthRedirect = (Component) => {

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading,
    });

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isLoading) return <Preloader />
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);     //  give to HOC isAuth via connect

    return ConnectedAuthRedirectComponent;
}
