"use client"

import { useState } from "react"
import "./MyPageInquiryReport.css"
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SideNavigation from "../components/SideNavigation"

const MyPageInquiryReport = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(true)
  const [showResponse, setShowResponse] = useState(false)

  let sideMenu = [
    {
      title: "회원정보 조회 및 수정",
      link: "/my-page/info",
      subMenu: [
        {
          title: "회원정보 조회 및 수정",
          link: "/my-page/info",
        }
      ]
    },
    {
      title: "주문내역",
      link: "/my-page/order",
    },
    {
      title: "문의내역",
      link: "/my-page/inquiry",
    },
    {
      title: "고객문의",
      link: "/my-page/inquiry",
    },
    {
      title: "신고문의",
      link: "/my-page/inquiry",
    },
    {
      title: "찜목록",
      link: "/my-page/inquiry",
    },
    {
      title: "최근 본 상품",
      link: "/my-page/inquiry",
    },
    {
      title: "쿠폰",
      link: "/my-page/inquiry",
    },
    {
      title: "회원탈퇴",
      link: "/my-page/inquiry",
    }
  ]

  let navigationMenu = [
    {
      title: "Hot",
      link: "/my-page/info",
    },
    {
      title: "세일",
      link: "/my-page/order",
    },
    {
      title: "라이브",
      link: "/my-page/inquiry",
    },
    {
      title: "이벤트",
      link: "/my-page/inquiry",
    },
    {
      title: "회원혜택",
      link: "/my-page/inquiry",
    }
  ]

  return (
    <div className="ebear-container">
      {/* 헤더 */}
      <Headers />

      {/* 네비게이션 */}
      <Navigation navigationMenu={navigationMenu}/>

      <div className="page-title">
        <h1>문의내역 (신고문의)</h1>
      </div>

      <div className="main-layout">
        {/* 사이드 네비게이션 메뉴 */}
        <SideNavigation sideMenu={sideMenu} />

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
