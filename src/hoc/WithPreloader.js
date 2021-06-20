
import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

export const WithPreloader = (Component) => {

    let mapStateToPropsForFetching = (state) => ({
        isFetching: state.usersPage.isFetching,
    });

    class PreloadBeforeComponent extends React.Component {
        render() {
            if (this.props.isFetching) return <Preloader />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForFetching)(PreloadBeforeComponent);     //  give to HOC props

    return ConnectedAuthRedirectComponent;
}
