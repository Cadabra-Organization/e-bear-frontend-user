import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <span className="footer-link">이베어 소개</span>
            <span className="footer-link">사업자 정보</span>
            <span className="footer-link">이용약관</span>
            <span className="footer-link highlighted">개인정보처리방침</span>
            <span className="footer-link underline">결제대행 위탁사</span>
            <span className="footer-link">법적 고시사항</span>
            <span className="footer-link">파트너 지원</span>
            <span className="footer-link">고객 지원</span>
          </div>

          <div className="footer-info">
            <p className="company-ceo">대표자 이베어</p>
            <p className="company-info">뭘 써야 할까요</p>
            <p className="company-description">
              일부 상품의 경우 이베어는 통신사판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
            </p>
          </div>

          <p className="copyright">© eBEAR ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    )
}

export default Footer;