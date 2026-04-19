import "./MyPageInquiryReport.css"
import SideNavigation from "../components/SideNavigation"
import InquiryItem from "../components/InquiryItem"
import MyPageHeader from "../components/MyPageHeader";
import { useState } from "react";

const MyPageInquiryReport = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let item = [
    {
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
      brand: "유닉스",
      productName: "오브제 헤어 드라이기 UN-B1919N",
      title: "유닉스 상품 재신고합니다",
      content: "안녕하세요. 저는 노란색이 좋아서 노란색으로 사고 싶은데, 분홍색만 판다고 해서 신고합니다. 조치해 주세요.",
      date: "2025.03.15",
      replyStatus: 0
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
      brand: "유닉스",
      productName: "오브제 헤어 드라이기 UN-B1919N",
      title: "유닉스 상품 신고합니다",
      content: "안녕하세요. 저는 노란색이 좋아서 노란색으로 사고 싶은데, 분홍색만 판다고 해서 신고합니다. 조치해 주세요.",
      date: "2025.02.13",
      replyStatus: 1,
      response: {
        greeting: "안녕하십니까, eBear입니다.",
        content: "판매 제품의 색상, 수량 등에 관한 사항은 판매자 재량 영역으로, eBear 자체에서 강제할 수 없는 점 양해 부탁드립니다.",
        closing: "앞으로도 eBear에 많은 관심 부탁드립니다. 감사합니다."
      }
    }
  ]

  let sideMenu = [
    {
        title: "회원정보 조회 및 수정",
        link: "/mypage/userinfo",
    },
    {
        title: "주문내역",
        link: "/mypage/orderlist",
    },
    {
        title: "문의내역",
        subMenu: [
            {
                title: "고객문의",
                link: "/mypage/inquiry",
            },
            {
                title: "신고문의",
                link: "/mypage/inquiryreport",
            }
        ]
    },
    {
        title: "찜목록",
        link: "/mypage/wishlist",
    },
    {
        title: "최근 본 상품",
        link: "/mypage/currentview",
    },
    {
        title: "쿠폰",
        link: "/mypage/cupon",
    },
    {
      title: "포인트",
      link: "/mypage/point",
    },
    {
        title: "회원탈퇴"
    }
  ]

  return (
    <>
      <MyPageHeader title={"문의내역 (신고문의)"} toggleSidebar={() => setIsSidebarOpen(true)}/>

      <div className="main-layout">
        {/* 사이드 네비게이션 메뉴 */}
        <SideNavigation sideMenu={sideMenu} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
        
        {/* 메인 콘텐츠 */}
        <main className="main-content">
          {/* 문의 목록 */}
          <div className="inquiry-list">
            {/* 첫 번째 문의 */}
              {item.map((data, index) => (
                <InquiryItem key={data.id || index} item={data} />
              ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default MyPageInquiryReport
