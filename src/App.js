import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Users from "./components/Users/Users";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = () => {

  let FuncProfile = () => <Profile 
  // profilePage={props.state.profilePage} 
  />;
  let FuncDialogs = () => <DialogsContainer />;
  let FuncNews = () => <News/>;
  let FuncMusic = () => <Users/>;
  let FuncSettings = () => <Settings/>;

  return (

      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={FuncProfile} />
          <Route path="/dialogs" render={FuncDialogs} />
          <Route exact path="/" render={FuncNews} />
          <Route path="/users" render={FuncMusic} />
          <Route path="/settings" render={FuncSettings} />
        </div>
      </div>

  );
};

export default App;
