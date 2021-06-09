import React from "react";
import loader from "../../../img/loading.gif";
import "./Preloader.css";

let Preloader = (props) => {
    return <div className="loaderContainer" >
        <img className="preloaderImg" src={loader} alt="loading"/>
    </div>
}

export default Preloader;