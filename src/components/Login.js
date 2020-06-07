import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions";
import { createUser } from "../actions";

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

    const handleSignIn = () => {
        const {dispatch} = props;
        dispatch(loginUser(email, password));
    }

    const handleSignUp = () => {
        const {dispatch} = props;
        dispatch(createUser(email, password));
        props.history.push('/signup/confirmation');
    }

    if (isAuthenticated) {
        return <Redirect to='/' />;
    } else {
        return (
            <div>
                <h2>Post Arctic</h2>
                {loginError && (<h6>Incorrect log-in details</h6>)}
                <h6>Log back in...</h6>
                <input type='email' name='email' placeholder='Email' onChange={handleEmailChange} />
                <input type='password' name='password' placeholder='Password' onChange={handlePasswordChange} />
                <button onClick={handleSignIn}>Sign in</button>
                <h6>...or sign up below</h6>
                <input type='email' name='email' placeholder='Email' onChange={handleEmailChange} />
                <input type='password' name='password' placeholder='Password' onChange={handlePasswordChange} />
                <button onClick={handleSignUp}>Sign up</button>
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