import "./MyPageInquiry.css"
import SideNavigation from "../components/SideNavigation"
import InquiryItem from "../components/InquiryItem"
import MyPageHeader from "../components/MyPageHeader";
import { useState } from "react";

const MyPageInquiry = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    let item = [
        {
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: "유닉스",
            productName: "오브제 헤어 드라이기 UN-B1919N",
            title: "색상 재문의",
            date: "2025.03.15",
            content: "안녕하세요. 분홍색 말고 노란색은 없나요? 저는 노란색이 너무 좋아요. 노란색이 없으면 하늘색이라도 주세요.",
            replyStatus: 0
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: "유닉스",
            productName: "오브제 헤어 드라이기 UN-B1919N",
            title: "색상 문의",
            date: "2025.02.13",
            content: "안녕하세요. 분홍색 말고 노란색은 없나요? 저는 노란색이 너무 좋아요. 노란색이 없으면 하늘색이라도 주세요.",
            replyStatus: 1,
            response: {
                greeting: "안녕하십니까, 유닉스입니다.",
                content: "저희 상품에 관심 가져주셔서 감사합니다. 유닉스 오브제 헤어 드라이기 UN-B1919N 제품은 현재 분홍 색상만 판매하고 있습니다. 양해 부탁드립니다.",
                closing: "감사합니다."
            }
        }
    ]

    return (
        <>
            <MyPageHeader title={"문의내역 (고객문의)"} toggleSidebar={() => setIsSidebarOpen(true)}/>

            <div className="main-layout">
                {/* 사이드 네비게이션 메뉴 */}
                <SideNavigation sideMenu={sideMenu} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>

                {/* 메인 콘텐츠 */}
                <main className="main-content">
                    {/* 문의 목록 */}
                    <div className="inquiry-list">
                        {item.map((data, index) => (
                            <InquiryItem key={data.id || index} item={data} />
                        ))}
                    </div>
                </main>
            </div>
        </>
    )

}

export default MyPageInquiry