import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import NotFound from "./components/common/NotFound";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(()=> import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(()=> import("./components/Profile/ProfileContainer"));

const profileContainerWithSuspense = () => {
    return <React.Suspense fallback={<div>Loading...</div>} >
    <ProfileContainer/>
    </React.Suspense>
    }

const dialogsContainerWithSuspense =() => {
    return <React.Suspense fallback={<div>Loading...</div>} >
        <DialogsContainer/>
    </React.Suspense>}

class App extends React.Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occurred, try later.");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={profileContainerWithSuspense} />
                    <Route path="/dialogs" render={dialogsContainerWithSuspense}/>
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

let AppContainer = compose(
    withRouter,     //  needs withRouter cause connect bugs Routes
    connect(mapStateToProps, {initializeApp})
)(App);


let AppWrapper = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
}

export default AppWrapper;
