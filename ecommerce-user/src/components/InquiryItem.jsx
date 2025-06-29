import { useState } from "react";
import './InquiryItem.css';

export default function InquiryItem({ item }) {
    const [showResponse, setShowResponse] = useState(false);

    return (
        <div className="inquiry-item">
            <div className="inquiry-content">
                <img
                    src={item.imageUrl}
                    alt="상품 이미지"
                    className="product-image"
                />
                <div className="inquiry-details">
                    <div className="product-info">
                        <p className="brand-name">{item.brand}</p>
                        <p className="product-name">{item.productName}</p>
                    </div>
                    <p className="inquiry-title">{item.title}</p>
                    <div className="inquiry-meta-content">
                        <p className="inquiry-content">{item.content}</p>
                        <button className="view-response-btn" onClick={() => setShowResponse(!showResponse)}>답변보기</button>
                    </div>
                    <div className="inquiry-meta">
                        <p className="inquiry-date">{item.date}</p>
                        <span className="separator">|</span>
                        
                    </div>

                    {showResponse && (
                        <div className="response-section">
                            <p>{item.response.greeting}</p>
                            <p>{item.response.content}</p>
                            <p>{item.response.closing}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
