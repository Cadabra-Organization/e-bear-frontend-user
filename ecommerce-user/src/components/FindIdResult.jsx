import "./FindIdResult.css";
import { CheckIcon } from "./CustomTag";

function FindIdResult({ idResult }) {
    return (
        <>
            <div className="find-id-result-title-container">
                <div className="find-id-result-icon">
                    <CheckIcon />
                </div>
                
                <h1 className="find-id-title">아이디 찾기 완료</h1>
            </div>
            <div className="id-result-area">
                <p className="id-result">{idResult}</p>
            </div>
            <div className="buttons">
                <button className="login-button">로그인</button>
                <button className="find-pw-button">비밀번호 찾기</button>
            </div>
        </>
    )
}

export default FindIdResult;