import React from 'react';
import {connect} from "react-redux";
import {doLogOut, doLogIn} from "../../redux/authReducer";
import Login from "./Login";

class LoginContainer extends React.Component {

    render()
    {
        return <Login {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {setLogin: doLogIn, deleteLogin: doLogOut})(LoginContainer);