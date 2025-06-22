"use client"

import { useState } from "react"
import "./MyPageInquiryReport.css"
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import { MenuIcon, ChevronRightIcon, ChevronDownIcon, Avatar, AvatarFallback, UserIcon } from '../components/CustomTag';

const MyPageInquiryReport = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(true)
  const [showResponse, setShowResponse] = useState(false)

  return (
    <div className="ebear-container">
      {/* 헤더 */}
      <Headers />

      {/* 네비게이션 */}
        <nav className="navigation">
          <div className="nav-content">
            <div className="menu-button">
              <MenuIcon className="menu-icon" />
            </div>
            <div className="nav-links">
              <span className="nav-link active">HOT</span>
              <span className="nav-link">세일</span>
              <span className="nav-link">라이브</span>
              <span className="nav-link">이벤트</span>
              <span className="nav-link">회원혜택</span>
            </div>
          </div>
        </nav>

      <div className="page-title">
        <h1>문의내역 (신고문의)</h1>
      </div>

      <div className="main-layout">
        {/* 사이드바 */}
        <aside className="sidebar">
          {/* 사용자 프로필 */}
          <div className="user-profile">
            <div className="profile-content">
              <Avatar className="profile-avatar">
                <AvatarFallback className="avatar-fallback">
                  <UserIcon className="avatar-icon" />
                </AvatarFallback>
              </Avatar>
              <div className="profile-info">
                <p className="username">유저아이디</p>
                <p className="user-type">일반회원</p>
              </div>
            </div>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="sidebar-nav">
            <div className="nav-item">
              <span>회원정보 조회 및 수정</span>
              <ChevronRightIcon />
            </div>
            <div className="nav-item">
              <span>주문내역</span>
              <ChevronRightIcon />
            </div>
            <div className="nav-item">
              <span>문의내역</span>
              <ChevronDownIcon />
            </div>
            <div className="nav-item">
              <span>고객문의</span>
              <ChevronRightIcon />
            </div>
            <div className="nav-item">
              <span>신고문의</span>
              <ChevronRightIcon />
            </div>
            <div className="nav-item">
              <span>적립북</span>
              <ChevronRightIcon />
            </div>
            <div className="nav-item">
              <span>최근 본 상품</span>
              <ChevronRightIcon />
            </div>
            <div className="nav-item">
              <span>쿠폰</span>
              <ChevronRightIcon />
            </div>
            <div className="nav-item">
              <span>회원탈퇴</span>
              <ChevronRightIcon />
            </div>
          </nav>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="main-content">
          {/* 문의 목록 */}
          <div className="inquiry-list">
            {/* 첫 번째 문의 */}
            <div className="inquiry-item">
              <div className="inquiry-content">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center"
                  alt="상품 이미지"
                  className="product-image"
                />
                <div className="inquiry-details">
                  <div className="product-info">
                    <p className="brand-name">휴닉스</p>
                    <p className="product-name">오브제 베어 드레스화 | UN-B1919N</p>
                  </div>
                  <p className="inquiry-title">휴닉스 신발 신고합니다</p>
                  <p className="inquiry-date">2025.03.15 | 확인중</p>
                </div>
              </div>
            </div>

            {/* 두 번째 문의 */}
            <div className="inquiry-item">
              <div className="inquiry-content">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center"
                  alt="상품 이미지"
                  className="product-image"
                />
                <div className="inquiry-details">
                  <div className="product-info">
                    <p className="brand-name">휴닉스</p>
                    <p className="product-name">오브제 베어 드레스화 | UN-B1919N</p>
                  </div>
                  <p className="inquiry-title">휴닉스 신발 신고합니다</p>
                  <div className="inquiry-meta">
                    <p className="inquiry-date">2025.02.13</p>
                    <span className="separator">|</span>
                    <button className="view-response-btn" onClick={() => setShowResponse(!showResponse)}>
                      답변보기
                    </button>
                  </div>

                  {/* 답변 */}
                  {showResponse && (
                    <div className="response-section">
                      <p className="response-greeting">안녕하십니까, eBear입니다.</p>
                      <p className="response-content">
                        문의 해주신 내용 수정 후에 처리 사항에 대해서 안내드립니다. eBear 고객센터 김대리 수 있는 담당자
                        팀에서는 답니다.
                      </p>
                      <p className="response-closing">앞으로도 eBear에 많은 관심 부탁드립니다. 감사합니다.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    {/* 푸터 */}
    <Footer />
    </div>
  )
}

export default MyPageInquiryReport
