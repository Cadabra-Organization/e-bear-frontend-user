import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <span className="footer-link">이용약 소개</span>
            <span className="footer-link">사업자 정보</span>
            <span className="footer-link">이용약관</span>
            <span className="footer-link highlighted">개인정보처리방침</span>
            <span className="footer-link">청소년보호 정책</span>
            <span className="footer-link">통신 고시사항</span>
            <span className="footer-link">피해신고 접수</span>
            <span className="footer-link">고객 지원</span>
          </div>

          <div className="footer-info">
            <p className="company-info">대표자 소개명</p>
            <p className="company-info">통신 판매업신고</p>
            <p className="company-description">
              당사 사업자 정보 이메일로는 통신판매업에서 사업자 정보 통신판매업자신고 사업, 사업 번호, 이메일 정보
              통신에 대한 정보를 공고드립니다. 수 있을 통신판매업자 고객센터 나타날 수 있습니다.
            </p>
          </div>

          <p className="copyright">© eBEAR ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    )
}

export default Footer;