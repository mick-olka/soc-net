import React from 'react';
import './Header.css';
import Header from "./Header";
import {connect} from "react-redux";
import {getLogin} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getLogin();
    }

    render()
    {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, {getLogin})(HeaderContainer);