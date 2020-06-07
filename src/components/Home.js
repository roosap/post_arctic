import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import ImageSplashes from "./ImageSplashes";
import ImageRoad from "./ImageRoad";
import ImageFire from "./ImageFire";

const Home = (props) => {

    const { isLoggingOut, logoutError } = props;

    const handleLogout = () => {
        const {dispatch} = props;
        dispatch(logoutUser());
    }
    return ( 
        <div>
            <h4>Journal 03/20</h4>
            <ImageFire />
            <ImageSplashes />
            <ImageRoad />
            <br></br>
            <button className="sign-out" onClick={handleLogout}>Sign Out</button>
            {isLoggingOut && <h4>Logging Out....</h4>}
            {logoutError && <h4>Error logging out</h4>}
        </div>
     );
}

function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError
    };
}
 
export default connect(mapStateToProps)(Home);