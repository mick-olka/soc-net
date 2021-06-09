import React from 'react';
import './Header.css';
import Header from "./Header";
import {connect} from "react-redux";
import {setLogin} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setLogin();
    }

    render()
    {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setLogin})(HeaderContainer);