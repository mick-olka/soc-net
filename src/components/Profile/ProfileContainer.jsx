import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {
    getProfile,
    getProfileStatus, savePhoto, saveProfile,
    updateProfileStatus
} from "../../redux/profileReducer";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";
import {doLogOut} from "../../redux/authReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId);
        if (!userId) {
            userId = this.props.myId;
        }
        if (userId) {
            this.props.getProfile(userId);  //  setProfile from mdtp from connect
            this.props.getProfileStatus(userId);
        }
        }
        // console.log("profile container did mount with id: "+userId);

    componentDidUpdate(prevProps, prevState, snapshot) {
        let userId = parseInt(this.props.match.params.userId);
        let prevUserId = parseInt(prevProps.match.params.userId);
        if (!userId && prevUserId && this.props.myId) { // if we go from /profile/:id to /profile and are authorised
            this.props.getProfile(this.props.myId);
            this.props.getProfileStatus(this.props.myId);
        }
    }

    render() {

        if (!this.props.myId && !this.props.match.params.userId) {  //  if not authorised and go to /profile
            return <Redirect to='/login' />
        }
        if (this.props.isFetching) {
            return (<Preloader/>);
        }
        return (<Profile {...this.props} isOwner={!this.props.match.params.userId} />);
    }
}

let mapStateToProps = (state) => {     //  state comes from connect -- reduxState
    return ({
        myId: state.auth.myId,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.usersPage.isFetching,
    });
};

//let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);     //  HOC
//let ContainerComponentWithUrlData = withRouter(AuthRedirectComponent);   //  give AuthRedirectComponent HOC here

export default compose(     //  what we get when redirecting to ProfileContainer in App.js
    connect(mapStateToProps,
        {getProfile, getProfileStatus, updateProfileStatus, doLogOut, savePhoto, saveProfile}), //  props.myId
    withRouter,         //  url data
)(ProfileContainer);
