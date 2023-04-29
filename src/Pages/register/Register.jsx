import React from "react";
import "../register/register.css";
import { Person, Mail, LockOpen } from "@mui/icons-material";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerTitleAbout">
          <span className="registerTitle">Registration</span>
          <span className="registerAbtDesc">
            Connect with friends all around the world
          </span>
        </div>

        <div className="registerContainer">
          <div className="registerContainerWrap">
            <div className="registerInputWrap">
              <Mail className="registerIcon" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="registerInputWrap">
              <Person className="registerIcon" />
              <input type="text" placeholder="Name" />
            </div>

            <div className="registerInputWrap">
              <LockOpen className="registerIcon" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
        </div>

        <hr className="registerHr" />

        <div className="registerAccept">
          <p className="registerAcceptDesc">
            By clicking Register, you agree on our{" "}
            <span className="registerPrivacy">Privacy Policy</span>
          </p>

          <div className="registerJoin">
            <button className="registerBtn">Submit</button>

            <p className="registerSignin">
              Already on Meetme? <span className="registerSigninSpan">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
