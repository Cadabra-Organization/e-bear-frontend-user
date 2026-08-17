import React from 'react';
import { Link } from 'react-router-dom';   
import './Wishlist.css';
import { Avatar, AvatarFallback, UserIcon, HeartFillIcon, HeartIcon } from "../components/CustomTag"


function Wishlist({ wishlistProducts, onRemoveWish, onLoadMore, hasMore, isLoadingMore }) {
    const handleHeartClick = (e, wishListNo) => {
        e.preventDefault();   // Link 기본 이동 취소
        e.stopPropagation();  // 부모로 클릭 전파 차단
        onRemoveWish(wishListNo);
    };
    
    if (wishlistProducts.length === 0) {
        return <div className="wish-empty">찜한 상품이 없습니다.</div>;
    }
    
    return (
        <>
            <div className="wish-list">
                <div className="wish-item">
                    {
                        wishlistProducts.map((item) => (
                            <Link
                                to={item.link}
                                className="wish-content"
                                key={item.wishListNo}
                            >
                                <img
                                    src={item.imgSrc}
                                    alt="상품 이미지"
                                    className="product-image" />
                                <div className="wish-details">
                                    <div className="product-info">
                                        <div className="heart-row">
                                            {/* 찜하트 - 클릭 시 찜 해제 */}
                                            {/* <p className="brand-name">{item.brand}</p> */}
                                            <div onClick={(e) => handleHeartClick(e, item.wishListNo)}>
                                                {item.wish ? <HeartFillIcon className="heart-icon" />
                                                        : <HeartIcon className="heart-icon" />}
                                            </div>
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
                            </Link>
                        ))}
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