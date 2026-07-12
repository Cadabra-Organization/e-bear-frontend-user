import "./SignUp.css";
import api from "../api/axios.js";
import { useState } from "react";

const SignUp = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [emailAuthCode, setEmailAuthCode] = useState("");
    const [name, setName] = useState("");

    const sendEmailCode = async () => {
        await api.post("/email/send", { email });
        alert("인증코드 발송!");
    }
    
    const verifyEmailCode = async () => {
        await api.post("/email/verify", { email, emailAuthCode });
        alert("이메일 인증 완료!");
    }

    const handleSignUp = async () => {

        if (pw !== pwConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {

            await api.post("/signup", {
                name: name,
                id: id,
                pw: pw,
                email: email
            });
            alert("가입이 완료되었습니다.");
        } catch (e) {
            console.error(e);
            alert(e.response?.data?.message ?? "가입 요청에 실패했습니다.");
        }
    };

    return (
       <div className="signup-container">
            <div className="signup-title">
                eBear
            </div>
            <div className="signup-input-container">
                <input className="signup-input" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="이름" />
                <input className="signup-input" value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder="아이디" />
                <input className="signup-input" value={pw} onChange={(e) => setPw(e.target.value)} type="password" placeholder="비밀번호" />
                <input className="signup-input" value={pwConfirm} onChange={(e) => setPwConfirm(e.target.value)} type="password" placeholder="비밀번호 확인" />
                <div className="email-auth-container">
                    <input className="signup-email-input" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="이메일" />
                    <button className="email-auth-button" onClick={sendEmailCode}>이메일 발송</button>
                </div>

                <div className="email-auth-container">
                <input className="signup-email-input" value={emailAuthCode} onChange={(e) => setEmailAuthCode(e.target.value)} type="text" placeholder="인증번호 입력" />
                    <button type="button" className="email-auth-button" onClick={verifyEmailCode}>
                        인증확인
                    </button>
                </div>
                {/* <input className="signup-input email-auth-code-input email-auth-code-input" type="text" placeholder="이메일 인증번호" /> */}
                <button
                    type="button"
                    className="signup-button"
                    onClick={handleSignUp}
                >
                    가입하기
                </button>
            </div>
       </div>
    )
}

export default SignUp;