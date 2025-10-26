import { useState } from "react";
import './OrderItem.css';
import Pagination from '@mui/material/Pagination';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

function OrderItem({ orderProducts }) {
    const [selectedOrder, setSelectedOrder] = useState(null);
    // 모달 열기
    const handleOpenModal = (order) => {
        setSelectedOrder(order);
    };
    // 모달 닫기
    const handleCloseModal = () => {
        setSelectedOrder(null);
    };

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
                            <button className="order-btn" onClick={() => handleOpenModal(item)}>결제정보</button>
                            {item.deliveryStatus === "배송완료" && (
                                <button className="order-btn">리뷰 작성</button>
                            )}
                        </div>
                    </div>
                ))
            )}
            <Pagination count={10} color="primary" />

            <Modal isOpen={!!selectedOrder} onClose={handleCloseModal}>
                {selectedOrder && (
                    <>
                        <div className="modal-header">
                            <h2>주문결제정보</h2>
                            <button className="close-button" onClick={handleCloseModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="info-row">
                                <span>결제 방법</span>
                                <span>{selectedOrder.deliveryStatus}</span>
                            </div>
                            <div className="info-row">
                                <span>결제 일시</span>
                                <span>{selectedOrder.orderDate} 09:00:00</span>
                            </div>
                            <div className="info-row">
                                <span>상품 총 금액</span>
                                <span>{selectedOrder.price}</span>
                            </div>
                            <div className="info-row">
                                <span>포인트 사용 금액</span>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <span>총 결제금액</span>
                            <span className="total-price">{selectedOrder.price} 원</span>
                        </div>
                    </>
                )}
            </Modal>
        </div>
    )
}

export default OrderItem;