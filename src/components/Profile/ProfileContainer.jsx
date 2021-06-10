import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setProfile} from "../../redux/profileReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId=this.props.myId;}
        this.props.setProfile(userId);  //  setProfile from mdtp from connect
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let userId = this.props.match.params.userId;
        if (!userId) {this.props.setProfile(this.props.myId);}  //  redirect to my profile if exact /profile/
    }

    render() {
        return (<Profile {...this.props} />);
    }
}

let mapStateToProps = (state) => ({     //  state comes from connect -- reduxState
    profile: state.profilePage.profile,
    myId: state.auth.myId,
});

//let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);     //  HOC

//let ContainerComponentWithUrlData = withRouter(AuthRedirectComponent);   //  give AuthRedirectComponent HOC here

export default compose(     //  what we get when redirecting to ProfileContainer in App.js
    connect(mapStateToProps,
        {setProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
