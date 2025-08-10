import { useState } from "react";
import './OrderItem.css';
import Pagination from '@mui/material/Pagination';

function OrderItem({ orderProducts }) {
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
                            <button className="order-btn">결제정보</button>
                            <button className="order-btn">리뷰 작성</button>
                        </div>
                    </div>
                ))
            )}
            <Pagination count={10} color="primary" />
        </div>
    )
}

export default OrderItem;