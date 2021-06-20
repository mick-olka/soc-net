
import React from "react";
import {connect} from "react-redux";

export const WithProfileGetter = (Component) => {

    let mapStateToPropsForProfile = (state) => ({
        profile: state.profilePage.profile,
    });

    class WithProfileComponent extends React.Component {

        componentDidMount() {
            let userId = parseInt(this.props.match.params.userId);
            if (!userId) {userId=this.props.myId;}
            console.log(userId);
            this.props.setProfile(userId);  //  setProfile from mdtp from connect
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevProps.match.params.userId!==this.props.match.params.userId) {
                let userId = parseInt(this.props.match.params.userId);
                if (!userId) {userId=this.props.myId;}
                console.log(userId);
                this.props.setProfile(userId);  //  setProfile from mdtp from connect
            }
        }

        render() {
            console.log("profile hoc render");
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForProfile)(WithProfileComponent);     //  give to HOC isAuth via connect

    return ConnectedAuthRedirectComponent;
}
