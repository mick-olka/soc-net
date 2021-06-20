import React from 'react';
import './Header.css';
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, {})(HeaderContainer);
