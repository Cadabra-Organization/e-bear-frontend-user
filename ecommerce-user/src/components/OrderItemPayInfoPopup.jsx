import './OrderItemPayInfoPopup.css';

function OrderItemPayInfoPopup({item}) {
    if (!item) {
        return null;
    }
    return (
        <div className="inquiry-popup-container">
            <>
                <div className="modal-body">
                    <div className="info-row">
                        <span>결제 방법</span>
                        <span>{item.deliveryStatus}</span>
                    </div>
                    <div className="info-row">
                        <span>결제 일시</span>
                        <span>{item.orderDate} 09:00:00</span>
                    </div>
                    <div className="info-row">
                        <span>상품 총 금액</span>
                        <span>{item.price}</span>
                    </div>
                    <div className="info-row">
                        <span>포인트 사용 금액</span>
                        <span>0</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <span>총 결제금액</span>
                    <span className="total-price">{item.price} 원</span>
                </div>
            </>
        </div>
    );
}

export default OrderItemPayInfoPopup;