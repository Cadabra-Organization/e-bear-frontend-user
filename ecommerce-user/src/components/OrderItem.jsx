import { useState } from "react";
import './OrderItem.css';
import Pagination from '@mui/material/Pagination';
import OrderItemReviewPopup from "../components/OrderItemReviewPopup"
import OrderItemPayInfoPopup from "../components/OrderItemPayInfoPopup"
import PopUp from "../components/PopUp"

function OrderItem({ orderProducts }) {
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
                        <div className="order-list-basic-data">
                            <p className="order-date">{item.orderDate}</p>
                            <p className="recipient">받으시는 분 {item.recipient}</p>
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
                            <button className="order-btn" onClick={() => setPayInfoPopupOpen(item)}>결제 정보</button>
                            {item.deliveryStatus === "배송완료" && (
                                <button className="order-btn" onClick={() => setReviewPopupOpen(true)}>리뷰 작성</button>
                            )}
                        </div>
                    </div>
                ))
            )}
            <Pagination count={10} color="primary" />
            <PopUp
                isOpen={payInfoPopupOpen} 
                onClose={handleCloseModal} 
                title={"주문결제정보"} 
                component={<OrderItemPayInfoPopup item={payInfoPopupOpen}/>}
            />
            <PopUp 
                isOpen={reviewPopupOpen} 
                onClose={(handleReviewPopup)} 
                title={"리뷰작성"} 
                component={<OrderItemReviewPopup />}
            />
        </div>
    )
}

export default OrderItem;