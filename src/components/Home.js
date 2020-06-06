import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

const Home = (props) => {

    const { isLoggingOut, logoutError } = props;

    const handleLogout = () => {
        const {dispatch} = props;
        dispatch(logoutUser());
    }
    return ( 
        <div>
            <h2>hello</h2>
            <button onClick={handleLogout}>Sign Out</button>
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