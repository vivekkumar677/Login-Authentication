import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login(){
    return(
        <div className="login-container">
            <h1>LOGIN</h1>
            <form className="login-from">
                <label>UserName: </label><input type="text" placeholder="user name" name="user name"></input>
                <br></br>
                <label>Password: </label><input type="password" placeholder="password" name="password"></input>
            </form>

            <div className="reg-button-div">
                <h1>Not a User? Register</h1>
                <Link className="login-reg-link" to="/Register">LOGIN</Link>
            </div>
        </div>
    );
}
export default Login;