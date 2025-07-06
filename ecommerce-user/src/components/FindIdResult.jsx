import { useState } from "react";
import "./FindIdResult.css";

function FindIdResult({ idResult }) {
    return (
        <><div>
            <h1 className="find-id-title">eBear</h1>
        </div>
            <div className="id-result-area">
                <p className="id-result">{idResult}</p>
            </div>
            <div className="buttons">
                <button className="login-button">로그인</button>
                <button className="find-pw-button">비밀번호 찾기</button>
            </div></>
    )
}

export default FindIdResult;