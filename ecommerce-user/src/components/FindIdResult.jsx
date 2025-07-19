import { useState } from "react";
import "./FindIdResult.css";
import FindIdTypePw from "../components/FindIdTypePw"

function FindIdResult({ idResult }) {
    const [selected, setSelected] = useState('option1');

    return (
        <div className="find-id-container">
            <div>
                <h1 className="find-id-title">eBear</h1>
            </div>
            <div className="toggle-tab-container">
                <div className={`toggle-tab ${selected === "option1" ? "active" : ""}`} onClick={() => setSelected("option1")}>
                    아이디 찾기
                </div>
                <div className={`toggle-tab ${selected === "option2" ? "active" : ""}`} onClick={() => setSelected("option2")}>
                    비밀번호 찾기
                </div>
            </div>

            {
                selected === 'option1' ?
                    <><div className="id-result-area">
                        <p className="id-result">{idResult}</p>
                    </div>
                        <div className="buttons">
                            <button className="login-button">로그인</button>
                            <button className="find-pw-button">비밀번호 찾기</button>
                        </div></> : <FindIdTypePw />
            }
        </div>
    )
}

export default FindIdResult;