import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
    return (
       <div className="signup-container">
            <div className="signup-title">
                eBear
            </div>
            <div className="signup-input-container">
                <input className="signup-input" type="text" placeholder="이름" />
                <input className="signup-input" type="password" placeholder="아이디" />
                <input className="signup-input" type="password" placeholder="비밀번호" />
                <input className="signup-input" type="text" placeholder="비밀번호 확인" />
                <div className="email-auth-container">
                    <input className="signup-email-input" type="text" placeholder="이메일" />
                    <button className="email-auth-button">인증</button>
                </div>
                <input className="signup-input" type="text" placeholder="이메일 인증번호" />
                <button className="signup-button">가입하기</button>
            </div>
       </div>
    )
}

export default SignUp;