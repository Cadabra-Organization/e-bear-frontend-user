import { useState } from 'react';
import './OrderItemReviewPopup.css';
import Rating from '@mui/material/Rating';

function OrderItemReviewPopup() {
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0); // 최종 별점 상태 추가 (0 ~ 5)
    const [hoverRating, setHoverRating] = useState(0); // 별점 호버 상태값
    const [isRatingSelected, setIsRatingSelected] = useState(false); // 별점 선택 여부

    const currentRatingText = (hoverRating > 0 || rating > 0)
        ? `${hoverRating > 0 ? hoverRating : rating}점` 
        : '별점을 선택해 주세요.';

    return (
        <div className="inquiry-popup-container">
            <div className="inquiry-popup-guide">
                <p>■ 상품과 관련없는 내용, 비방, 광고, 불건전한 내용의 글은 사전동의 없이 삭제될수 있습니다.</p>
            </div>

            {/* 별점 입력 영역 */}
            <div className="rating-area">
                <Rating 
                    name="half-rating" 
                    value={rating}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                        setIsRatingSelected(true); // 클릭 시 선택 완료 표시
                        setHoverRating(0); // 호버 상태 초기화
                    }}
                    onChangeActive={(event, newHover) => {
                        if (!isRatingSelected) { // 선택 전에만 호버 동작
                            setHoverRating(newHover);
                        }
                    }} 
                />
                <span className="rating-text">{currentRatingText}</span>
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
                    // disabled={isSubmitDisabled}
                >작성하기</button>
            </div>
        </div>
    );
}

export default OrderItemReviewPopup;