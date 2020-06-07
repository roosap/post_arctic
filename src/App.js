import React, { Fragment, useRef } from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUpConfirmation from './components/SignUpConfirmation';

function App(props) {

  const switchRef = useRef(null);

  const handleModeChange = () => {
    switchRef.current.classList.toggle("light-mode");
  }

  const { isAuthenticated, isVerifying } = props;
  return (
    <Fragment>
      <div ref={switchRef} className="dark-mode">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"  onClick={handleModeChange}></span>
        </label>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Home}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route path="/login" component={Login} />
        <Route path='/signup/confirmation' component={SignUpConfirmation} />
      </Switch>
      </div>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);