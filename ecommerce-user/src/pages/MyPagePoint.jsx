import React from "react";
import "./MyPagePoint.css";
import SideNavigation from "../components/SideNavigation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Headers from "../components/Headers";

const MyPagePoint = () => {
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
                <h1>쿠폰</h1>
            </div>

            <div className="main-layout">
                {/* 사이드 네비게이션 메뉴 */}
                <SideNavigation sideMenu={sideMenu} />

                {/* 메인 콘텐츠 */}
                <main className="main-content">

                </main>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    )
}

export default MyPagePoint;