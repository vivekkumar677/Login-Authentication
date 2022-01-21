import React from "react";
import { Link } from "react-router-dom";

import "./Register.css";

function Register(){
    return (
        <div className="reg-constainer">
            <h1 className="nav">REGISTER HERE</h1>
            <form className="reg-form">

                <div className="full-name">
                    <label className="name-lable">Name :</label>
                    <input className="first-name" placeholder="First Name" ></input>
                    <input className="last-name" placeholder="Last Name" ></input>
                </div>

                <label className="username-lable">Username:</label>
                <input className="username-input" type="text" placeholder="UserName" name="UserName"></input>
                <label className="pass-lable">Password:</label>
                <input className="password-input" type="password" placeholder="Password" name="password"></input>
            </form>

            <div className="login-button-div">
                <h3>Already a user? Login</h3>
                <Link className="reg-login-link" to="/Login">LOGIN</Link>
            </div>
        </div>
    );
}
export default Register;