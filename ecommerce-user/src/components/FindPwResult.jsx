import "./FindPwResult.css";
import { useState } from "react";
import FindIdTypeId from "../components/FindIdTypeId";

function FindPwResult() {
    const [selected, setSelected] = useState('option1');

    return (
        <div className="find-id-container">
            <div>
                <h1 className="find-pw-title">eBear</h1>
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
                selected === 'option1' ? <FindIdTypeId /> : <p className="pw-result">비밀번호 재설정을 위한 링크가 고객님의 이메일로 전송되었습니다.</p>
            }
        </div>
    )
}

export default FindPwResult;