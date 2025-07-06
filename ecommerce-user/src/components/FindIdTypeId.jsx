import { useState } from "react";
import "./FindIdTypeId.css";

const FindIdTypeId = () => {
    return (
        <div className="find-id-content">
            <input className="find-id-input" type="text" placeholder="이메일" />
            <button className="find-id-auth-btn">인증요청</button>
        </div>
    )
}

export default FindIdTypeId;