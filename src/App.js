import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NotFound from "./components/common/NotFound";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader />

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route exact path="/" render={() => <News/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                    <Route path="/error" render={() => <NotFound/>}/>
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(
    withRouter,     //  needs withRouter cause connect bugs Routes
    connect(mapStateToProps, {initializeApp})
)(App);

//export default App;
