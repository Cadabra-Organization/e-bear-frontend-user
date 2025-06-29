import React from 'react';
import './Wishlist.css';
import { Avatar, AvatarFallback, UserIcon, HeartFillIcon } from "../components/CustomTag"

function Wishlist({ wishlistProducts }) {
    return (
        <>
            <div className="wish-list">
                <div className="wish-item">
                    {
                        wishlistProducts.map((item) => (
                            <div className="wish-content"><img
                                src={item.imgSrc}
                                alt="상품 이미지"
                                className="product-image" />
                                <div className="wish-details">
                                    <div className="product-info">
                                        <div className="heart-row">
                                            {/* 찜하트 */}
                                            <p className="brand-name">{item.brand}</p>
                                            <HeartFillIcon className="heart-icon" />
                                        </div>
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

export default Wishlist;