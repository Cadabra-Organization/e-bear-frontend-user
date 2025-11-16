import { useState } from "react";
import './OrderItem.css';
import useMediaQuery from "../hooks/useMediaQuery";
import Pagination from '@mui/material/Pagination';
import OrderItemReviewPopup from "../components/OrderItemReviewPopup"
import OrderItemPayInfoPopup from "../components/OrderItemPayInfoPopup"
import PopUp from "../components/PopUp"
import { ChevronRightIcon } from '../components/CustomTag';

function OrderItem({ orderProducts }) {
    const isMobile = useMediaQuery("(max-width: 768px)");

    // 결제정보
    const [payInfoPopupOpen, payInfoPopup] = useState(null);
    const setPayInfoPopupOpen = (order) => {
        payInfoPopup(order);
    };
    const handleCloseModal = () => {
        payInfoPopup(null);
    };

    // 리뷰작성
    const [reviewPopupOpen, setReviewPopupOpen] = useState(false);
    const handleReviewPopup = () => {
        setReviewPopupOpen(false);
    }
    return (
        <div className="order-list">
            {orderProducts.length === 0 ? (
                <p className="no-order">주문내역이 없습니다.</p>
            ) : (
                orderProducts.map((item, index) => (
                    <div key={index} className="order-list-content">
                        {isMobile ? (
                            // 모바일용 레이아웃
                            <div className="order-mobile-layout">
                                <p className="order-date">{item.orderDate}</p>
                                <div className="recipent-info">
                                    <p className="recipient">받으시는 분</p>
                                    <p className="recipient-name">{item.recipient}</p>
                                </div>
                                <p className="delivery-status-mobile">{item.deliveryStatus}</p>
                                <div className="order-product-mobile">
                                    <img src={item.imgSrc} alt="상품 이미지" className="product-image" />
                                    <div className="pay-btn-area">
                                        <button className="pay-btn-mobile" onClick={() => setPayInfoPopupOpen(item)}>
                                            결제정보
                                        </button>
                                        <ChevronRightIcon className="pay-chev-icon" />
                                    </div>
                                    <div className="order-product-info">
                                        <p className="product-brand">{item.brand}</p>
                                        <p className="product-name">{item.product}</p>
                                        <p className="product-quantity">수량 {item.quantity}개</p>
                                        <p className="product-price">{item.price} 원</p>
                                    </div>
                                    {item.deliveryStatus === "배송완료" && (
                                        <button className="review-btn-mobile" onClick={() => setReviewPopupOpen(true)}>
                                            리뷰 작성
                                        </button>
                                    )}
                                </div>
                            </div>
                        ) : (
                            // PC용 레이아웃
                            <>
                                <div className="order-list-basic-data">
                                    <p className="order-date">{item.orderDate}</p>
                                    <div className="recipent-info">
                                        <p className="recipient">받으시는 분</p>
                                        <p className="recipient-name">{item.recipient}</p>
                                    </div>
                                </div>
                                <div className="order-list-product-area">
                                    <img
                                        src={item.imgSrc}
                                        alt="상품 이미지"
                                        className="product-image" />
                                    <div>
                                        <p className="product-brand">{item.brand}</p>
                                        <p className="product-name">{item.product}</p>
                                        <p className="product-quantity">수량 {item.quantity}개</p>
                                        <p className="product-price">{item.price} 원</p>
                                    </div>
                                </div>
                                <div className="order-list-status-area">
                                    <p className="delivery-status">{item.deliveryStatus}</p>
                                </div>
                                <div className="order-list-button-area">
                                    <button className="pay-btn" onClick={() => setPayInfoPopupOpen(item)}>결제정보</button>
                                    {item.deliveryStatus === "배송완료" && (
                                        <button className="review-btn" onClick={() => setReviewPopupOpen(true)}>리뷰 작성</button>
                                    )}
                                </div>
                            </>)}
                    </div>
                ))
            )}
            <Pagination count={10} color="primary" />
            <PopUp
                isOpen={payInfoPopupOpen}
                onClose={handleCloseModal}
                title={"주문 결제정보"}
                component={<OrderItemPayInfoPopup item={payInfoPopupOpen} />}
            />
            <PopUp
                isOpen={reviewPopupOpen}
                onClose={(handleReviewPopup)}
                title={"리뷰 작성"}
                component={<OrderItemReviewPopup />}
            />
        </div>
    )
}

export default OrderItem;