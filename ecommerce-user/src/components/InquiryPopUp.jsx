import { useState } from 'react';
import './InquiryPopUp.css';

function InquiryPopUp() {
    const [message, setMessage] = useState('');

    return (
        <div className="inquiry-popup-container">
            <div className="inquiry-popup-guide">
                <p>■ 상품과 관련없는 내용, 비방, 광고, 불건전한 내용의 글은 사전동의 없이 삭제될 수 있습니다.</p>
                <p>■ 문의에 대한 답변 등록 시, 회원정보에 등록된 이메일로 안내드립니다.</p>
            </div>

            {/* 입력 영역 */}
            <div className="inquiry-write-area">
                <textarea
                    className="inquiry-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>

            {/* 옵션 체크박스 & 제출 버튼 */}
            <div className="check-submit-area">
                <label className="inquiry-private-check">
                    <input className="inquiry-checkbox" type="checkbox" />
                    <span className="inquiry-checkbox-text">비밀글로 작성하기</span>
                </label>
                <button
                    className="submit-button"
                    disabled={!message.trim()}
                >작성하기</button>
            </div>
        </div>
    )
}

export default InquiryPopUp;