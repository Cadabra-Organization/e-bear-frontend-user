import "./PayComplete.css";
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PayComplete = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [paymentInfo, setPaymentInfo] = useState({
        paymentKey: "",
        orderId: "",
        amount: 0
    });

    useEffect(() => {
        // URL 파라미터에서 결제 정보 가져오기
        const searchParams = new URLSearchParams(location.search);
        setPaymentInfo({
            paymentKey: searchParams.get("paymentKey") || "",
            orderId: searchParams.get("orderId") || "",
            amount: searchParams.get("amount") || 0
        });
    }, [location]);

    return (
        <div className="ebear-container">
            <Headers />
            <div className="main-layout">
                <div className="main-content">
                    <div className="payment-complete-box">
                        <div className="success-icon">✓</div>
                        <h2>결제가 성공적으로 완료되었습니다</h2>
                        
                        <div className="payment-info">
                            <p>결제 번호: {paymentInfo.paymentKey}</p>
                            <p>주문 번호: {paymentInfo.orderId}</p>
                            <p>결제 금액: {Number(paymentInfo.amount).toLocaleString()}원</p>
                        </div>

                        <div className="button-group">
                            <button 
                                className="btn btn-primary"
                                onClick={() => navigate("/mypage/orders")}
                            >
                                주문 내역 확인
                            </button>
                            <button 
                                className="btn btn-secondary"
                                onClick={() => navigate("/")}
                            >
                                쇼핑 계속하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PayComplete;