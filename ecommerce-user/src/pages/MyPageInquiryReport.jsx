"use client"

import { useState } from "react"
import "./MyPageInquiryReport.css"
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SideNavigation from "../components/SideNavigation"
import InquiryItem from "../components/InquiryItem"

const MyPageInquiryReport = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(true)
  const [showResponse, setShowResponse] = useState(false)

  let item = [
    {
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center" ,
      brand: "asdasd" ,
      productName: "asdasd" ,
      title: "asdasd" ,
      date: "asdasd" ,
      content: "asd",

      response: {
        greeting: "으아ㅏㄱ",
        content: "asdasd",
        closing: "asdasd"
      }
    },
    {
      imageUrl: "asd" ,
      brand: "asdasd" ,
      productName: "asdasd" ,
      title: "asdasd" ,
      date: "asdasd" ,
      content: "asd",

      response: {
        greeting: "으아ㅏㄱ",
        content: "asdasd",
        closing: "asdasd"
      }
    }
  ]

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
      <Navigation navigationMenu={navigationMenu} />

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
              {item.map((data, index) => (
                <InquiryItem key={data.id || index} item={data} />
              ))}
            {/* 두 번째 문의 */}
          </div>
        </main>
      </div>
      {/* 푸터 */}
      <Footer />
    </div>
  )
}

export default MyPageInquiryReport
