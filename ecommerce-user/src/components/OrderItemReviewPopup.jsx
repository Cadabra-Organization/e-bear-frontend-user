import { useState } from 'react';
import './OrderItemReviewPopup.css';

// 별점 컴포넌트
const StarRating = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const starCount = 5;

    // 현재 표시해야 할 별점 (마우스 오버 중이거나 최종 선택된 별점)
    const currentRating = hoverRating || rating;
    
    // 마우스 이벤트 발생 시 0.5 단위로 별점 값을 계산하는 함수
    const handleStarEvent = (e, index, action) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // 별 요소 내에서 마우스가 클릭된 X 좌표
        const offsetX = e.clientX - rect.left;
        const starWidth = rect.width;
        
        // 별의 중앙을 기준으로 왼쪽(0.5)인지 오른쪽(1.0)인지 판단
        const isHalf = offsetX < starWidth / 2;
        
        // 인덱스를 기반으로 최종 0.5 단위 별점 계산
        // index는 1부터 시작하므로, 0.5를 선택할 경우 (index - 1 + 0.5)
        // 1.0을 선택할 경우 (index)
        const newRate = index - (isHalf ? 0.5 : 0);

        if (action === 'hover') {
            setHoverRating(newRate);
        } else if (action === 'click') {
            // 이미 선택된 값과 같을 경우 (토글 방지)
            if (newRate === rating) {
                // 선택된 별점을 0으로 초기화하고 싶다면 setRating(0)을 사용하세요.
                setRating(0);
            } else {
                setRating(newRate);
            }
        }
    };
    
    // 별 5개를 렌더링
    return (
        <div 
            className="star-rating-container"
            onMouseLeave={() => setHoverRating(0)}
        >
            {[...Array(starCount)].map((_, index) => {
                const starIndex = index + 1;
                
                // 현재 별에 채워져야 할 비율 (0, 0.5, 1)
                let fillPercentage = 0;
                
                if (currentRating >= starIndex) {
                    fillPercentage = 100; // 해당 별이 완전히 채워짐
                } else if (currentRating === starIndex - 0.5) {
                    fillPercentage = 50; // 해당 별의 절반만 채워짐
                }
                
                return (
                    <div 
                        key={starIndex} 
                        className="star-half-container"
                        onMouseMove={(e) => handleStarEvent(e, starIndex, 'hover')}
                        onClick={(e) => handleStarEvent(e, starIndex, 'click')}
                        role="button"
                        aria-label={`${currentRating}점 선택됨`}
                    >
                        {/* 1. Empty Star Background (기본) */}
                        <span className="star-empty">★</span>
                        
                        {/* 2. Filled Star Overlay (채워지는 부분) */}
                        <span 
                            className="star-filled-overlay" 
                            style={{ width: `${fillPercentage}%` }}
                        >
                            ★
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

function OrderItemReviewPopup() {
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0); // 별점 상태 추가 (0 ~ 5)
    const [isPrivate, setIsPrivate] = useState(false); // 비밀글 상태 추가

    const handleSubmit = () => {
        if (rating === 0) {
            console.error('별점을 선택해 주세요.');
            return;
        }
        if (!message.trim()) {
            console.error('리뷰 내용을 입력해 주세요.');
            return;
        }
        
    };

    const isSubmitDisabled = !message.trim();

    return (
        <div className="inquiry-popup-container">
            <div className="inquiry-popup-guide">
                <p>■ 상품과 관련없는 내용, 비방, 광고, 불건전한 내용의 글은 사전동의 없이 삭제될수 있습니다.</p>
            </div>

            {/* 별점 입력 영역 */}
            <div className="rating-area">
                <StarRating rating={rating} setRating={setRating} />
                <span className="rating-text">{rating > 0 ? `${rating}점` : '별점을 선택해 주세요.'}</span>
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
                    // disabled={!message.trim()}
                    disabled={isSubmitDisabled}
                >작성하기</button>
            </div>
        </div>
    );
}

export default OrderItemReviewPopup;