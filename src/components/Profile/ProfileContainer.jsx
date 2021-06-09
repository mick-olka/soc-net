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
        if (!userId) {userId=2;}
        this.props.setProfile(userId);  //  setProfile from mdtp from connect
        }

    render() {
        return (<Profile {...this.props} />);
    }
}

let mapStateToProps = (state) => ({     //  state comes from connect -- reduxState
    profile: state.profilePage.profile,
});

//let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);     //  HOC

//let ContainerComponentWithUrlData = withRouter(AuthRedirectComponent);   //  give AuthRedirectComponent HOC here

export default compose(     //  what we get when redirecting to ProfileContainer in App.js
    connect(mapStateToProps,
        {setProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
