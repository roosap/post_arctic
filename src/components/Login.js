import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions";

const Login = (props) => {

    const { classes, loginError, isAuthenticated } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = ({target}) => {
        setEmail(target.value);
    };

    const handlePasswordChange = ({target}) => {
        setPassword(target.value);
    };

    const handleSubmit = () => {
        const {dispatch} = props;
        dispatch(loginUser(email, password));
    }

    if (isAuthenticated) {
        return <Redirect to='/' />;
    } else {
        return (
            <div>
                <h4>Sign In</h4>
                {loginError && (<h2>Incorrect log-in details</h2>)}
                <input type='email' name='email' placeholder="Email" onChange={handleEmailChange} />
                <input type='password' name='password' placeholder="Password" onChange={handlePasswordChange} />
                <button onClick={handleSubmit}>Sign in</button>
            </div>

       
        );
    }

}


function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  export default connect(mapStateToProps)(Login);