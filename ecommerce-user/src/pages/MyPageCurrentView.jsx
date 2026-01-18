import "./MyPageCurrentView.css"
import SideNavigation from "../components/SideNavigation"
import CurrentView from "../components/CurrentView"
import MyPageHeader from "../components/MyPageHeader";
import { useState } from "react";

const MyPageCurrentView = () => {
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

    let currentViewProducts = [
        {
            imgSrc: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            viewDate: "2025.02.14",
            brand: "유닉스",
            product: "오브제 헤어 드라이기 UN-B1919N",
            seller: "판매자 정보",
            price: "41,000",
            link: "/product/info"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            viewDate: "2025.02.14",
            brand: "유닉스",
            product: "오브제 헤어 드라이기 UN-B1919N",
            seller: "판매자 정보",
            price: "41,000",
            link: "/product/info"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            viewDate: "2025.02.14",
            brand: "유닉스",
            product: "오브제 헤어 드라이기 UN-B1919N",
            seller: "판매자 정보",
            price: "41,000",
            link: "/product/info"
        }
    ]

    return (
        <div className="ebear-container">
            <MyPageHeader title={"최근본상품"} toggleSidebar={() => setIsSidebarOpen(true)}/>

            <div className="main-layout">
                {/* 사이드 네비게이션 메뉴 */}
                <SideNavigation sideMenu={sideMenu} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>

                {/* 메인 콘텐츠 */}
                <main className="main-content">
                    {/* 최근본상품 */}
                    <CurrentView currentViewProducts={currentViewProducts} />
                </main>
            </div>
        </div>
    )
}

export default MyPageCurrentView