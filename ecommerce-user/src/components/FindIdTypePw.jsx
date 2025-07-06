import { useState } from "react";
import "./FindIdTypePw.css";

const FindIdTypePw = () => {
    return (
        <div className="find-id-content">
            <input className="find-id-input" type="text" placeholder="아이디" />
            <input className="find-id-input" type="text" placeholder="이메일" />
            <button className="find-id-auth-btn">인증요청</button>
        </div>
    )
}

export default FindIdTypePw;