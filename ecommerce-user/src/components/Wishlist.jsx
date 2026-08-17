import React from 'react';
import './Wishlist.css';
import { Avatar, AvatarFallback, UserIcon, HeartFillIcon, HeartIcon } from "../components/CustomTag"


function Wishlist({ wishlistProducts, onRemoveWish, onLoadMore, hasMore, isLoadingMore }) {
    if (wishlistProducts.length === 0) {
        return <div className="wish-empty">찜한 상품이 없습니다.</div>;
    }
    
    return (
        <>
            <div className="wish-list">
                <div className="wish-item">
                    {
                        wishlistProducts.map((item) => (
                            <div className="wish-content" key={item.wishListNo}><img
                                src={item.imgSrc}
                                alt="상품 이미지"
                                className="product-image" />
                                <div className="wish-details">
                                    <div className="product-info">
                                        <div className="heart-row">
                                            {/* 찜하트 - 클릭 시 찜 해제 */}
                                            {/* <p className="brand-name">{item.brand}</p> */}
                                            {item.wish ? <div onClick={() => onRemoveWish(item.wishListNo)}><HeartFillIcon className="heart-icon" /></div>
                                            : <div onClick={() => onRemoveWish(item.wishListNo)}><HeartIcon className="heart-icon"  /></div>}
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
                                    <p className="price">{item.price} 원</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* 더보기 버튼 */}
            {hasMore && (
                <div className="more-area">
                    <button 
                        className="more-button"
                        onClick={onLoadMore}
                        disabled={isLoadingMore}
                    >
                        {isLoadingMore ? "불러오는 중..." : "더보기"}
                    </button>
                </div>
            )}
            
        </>
    )
}

export default Wishlist;