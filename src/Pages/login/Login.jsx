import React from "react";
import "../login/login.css";
import { Mail, LockOpen } from "@mui/icons-material";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTitleAbout">
          <span className="loginTitle">Registration</span>
          <span className="loginAbtDesc">
            Connect with friends all around the world
          </span>
        </div>

        <div className="loginContainer">
          <div className="loginContainerWrap">
            <div className="loginInputWrap">
              <Mail className="loginIcon" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="loginInputWrap">
              <LockOpen className="loginIcon" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
        </div>

        <hr className="loginHr" />

        <div className="loginAccept">
          <p className="loginAcceptDesc">
            By clicking login, you agree on our{" "}
            <span className="loginPrivacy">Privacy Policy</span>
          </p>

          <div className="loginJoin">
            <button className="loginBtn">Submit</button>

            <p className="loginSignin">
              Not on Meetme? <span className="loginSigninSpan">Register</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
