import { useState } from "react";
import "./FindId.css";
import FindIdTypeId from "../components/FindIdTypeId";
import FindIdTypePw from "../components/FindIdTypePw";

const FindId = () => {
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
                selected === 'option1' ? <FindIdTypeId /> : <FindIdTypePw />
            }
            

        </div>
    )
}

export default FindId;