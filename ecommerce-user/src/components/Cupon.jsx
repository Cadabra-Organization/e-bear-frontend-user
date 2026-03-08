import React, { useState } from "react";
import "./Cupon.css";
import { DownloadIcon } from "./CustomTag";



const Cupon = ({data}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const conditionMap = {
        gt: '초과',
        ge: '이상',
        lt: '미만',
        le: '이하'
      };

    const conditionText = conditionMap[data.condition];

    

    return (
        <div className="div-cupon">
            <div>
                <div>
                    <span className="cupon-price">{data.price} </span>
                    <span className="money-type">원</span>
                </div>
                <div>
                    <span className="cupon-publisher">[{data.publisher}] </span>
                    <span className="sale-cupon">할인 쿠폰 </span> <br/>
                    <span className="sale-cupon-date">({data.startDt} ~ {data.endDt})</span>
                </div>
                <div className="cupon-condition-div">
                    <span className="cupon-condition">{data.conditionPrice}원 {conditionText} 구매시</span>
                </div>
            </div>
            

            <div className="cupon-download" onClick={openModal}>
                <DownloadIcon/>
            </div>

            {isModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div className="modal-header" style={{ padding: "20px 20px 10px 20px" }}>
                <h2>쿠폰 정보</h2>
                <button onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
                <div className="test" >
                    <div className="modal-price-section">
                        <span className="modal-cupon-price">{data.price}</span>
                        <span className="modal-money-type">원 할인</span>
                    </div>
                    <div className="modal-coupon-info">
                        <span className="modal-cupon-publisher">[{data.publisher}] </span>
                        <span className="modal-sale-cupon">할인쿠폰</span>
                    </div>
                    <div className="modal-condition-section">
                        <span className="modal-cupon-condition">{data.conditionPrice}원 {conditionText} 구매시</span>
                    </div>
                    <div className="ticket-dashed-line"></div>
                    <div className="modal-expiry-section">
                        <span className="modal-expiry-label">만료기한: </span>
                        <span className="modal-sale-cupon-date">{data.startDt} - {data.endDt} 까지</span>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px" }}>
                <button className="modal-cupon-down">다운로드</button>
            </div>
          </div>
        </div>
      )}        
        </div>
    )
}

const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  };
  
  const modalContentStyle = {
    background: "white",
    padding: "0",
    borderRadius: "12px",
    minWidth: "300px",
    maxWidth: "90vw",
    display: "flex",
    flexDirection: "column"
  };

export default Cupon;