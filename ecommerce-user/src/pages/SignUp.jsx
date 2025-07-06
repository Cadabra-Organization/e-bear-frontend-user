import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
    return (
       <div className="signup-container">
            <div className="signup-title">
                eBear
            </div>
            <div className="signup-input-container">
                <input className="signup-input" type="text" placeholder="ID" />
                <input className="signup-input" type="password" placeholder="Password" />
                <input className="signup-input" type="password" placeholder="Password Confirm" />
                <input className="signup-input" type="text" placeholder="Name" />
                <div className="email-auth-container">
                    <input className="signup-email-input" type="text" placeholder="Email" />
                    <button className="email-auth-button">인증</button>
                </div>
                <input className="signup-input" type="text" placeholder="Phone" />
                <button className="signup-button">Sign Up</button>
            </div>
       </div>
    )
}

export default SignUp;