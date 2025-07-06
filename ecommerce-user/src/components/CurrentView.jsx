import React from 'react';
import './CurrentView.css';
import { Avatar, AvatarFallback, UserIcon } from "../components/CustomTag"

function CurrentView({ currentViewProducts }) {
    return (
        <>
            <div className="current-view-list">
                <div className="current-view-item">
                    {
                        currentViewProducts.map((item) => (
                            <div className="current-view-content">
                                <div className="current-view-date">
                                    <p className="view-date">{item.viewDate}</p>
                                </div>
                                <div className="current-view-product-area">
                                    <img
                                        src={item.imgSrc}
                                        alt="상품 이미지"
                                        className="product-image" />
                                    <div className="current-view-details">
                                        <div className="product-info">
                                            <p className="brand-name">{item.brand}</p>
                                            <p className="product-name">{item.product}</p>
                                        </div>
                                        {/* 판매자 정보 */}
                                        <div className="seller-content">
                                            <Avatar className="seller-avatar">
                                                <AvatarFallback className="avatar-fallback">
                                                    <UserIcon className="seller-avatar-icon" />
                                                </AvatarFallback>
                                            </Avatar>
                                            <p className="seller-name">{item.seller}</p>
                                        </div>
                                        <p className="price">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* 더보기 버튼 */}
            <div className="more-area">
                <button className="more-button">더보기</button>
            </div>
        </>
    )
}

export default CurrentView;