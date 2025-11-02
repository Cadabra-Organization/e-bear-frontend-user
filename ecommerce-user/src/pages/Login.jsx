import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container">
            <div>
                <h1 className="login-title">eBear</h1>
            </div>
            <div>
                <div>
                    <input className="login-input" type="text" placeholder="ID" />
                    <input className="login-input" type="password" placeholder="Password" />
                    <button className="login-button">Login</button>

                    <label className="login-checkbox-label" for="autoLogin">
                        <div>
                            <input className="login-checkbox" type="checkbox" id="autoLogin" />
                            <span className="login-checkbox-span"></span>
                            <span className="login-checkbox-text">자동로그인</span>
                        </div>
                    </label>
                </div>
                <div className="login-link-container">
                    <Link className="login-link" to="/findid">아이디 찾기</Link>
                    <Link className="login-link" to="/findid">비밀번호 찾기</Link>
                    <Link className="login-link" to="/signuptermsagreement">회원가입</Link>
                </div>
                <div className="login-social-button-container">
                    <div className="login-social-button-item">
                        <a href="#" className="login-social-button"></a>
                        <span className="login-social-button-text">Google</span>
                    </div>
                    <div className="login-social-button-item">
                        <a href="#" className="login-social-button"></a>
                        <span className="login-social-button-text">Kakao</span>
                    </div>
                    <div className="login-social-button-item">
                        <a href="#" className="login-social-button"></a>
                        <span className="login-social-button-text">Naver</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;