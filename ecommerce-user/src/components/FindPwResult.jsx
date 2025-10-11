import { CheckIcon } from "./CustomTag";
import "./FindPwResult.css";

function FindPwResult() {
    return (
        <>
            <div className="find-pw-result-title-container">
                <div className="find-pw-result-icon">
                    <CheckIcon />
                </div>
                
                <h1 className="find-id-title">비밀번호 찾기 완료</h1>
            </div>
            <p className="pw-result">비밀번호 재설정을 위한 링크가 고객님의 이메일로 전송되었습니다.</p>
            <div className="buttons">
                <button className="login-button">로그인</button>
                <button className="find-pw-button">홈으로</button>
            </div>
        </>
    )
}

export default FindPwResult;