import React from "react";
import "./MyPagePoint.css";
import SideNavigation from "../components/SideNavigation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import Point from "../components/Point";

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
    ];

    let pointPageInfo = {currentPoint: 1000};
    let pointInfoList = [
        {method:'충전', date: '2025/03/16', description:'충전', point: 300, iconNo: 1},
        {method:'구매', date: '2025/03/16', description:'상품구매', point: 600, iconNo: 2},
    ];

    return ( 
        <div className="ebear-container">
            {/* 헤더 */}
            <Headers />

            {/* 네비게이션 */}
            <Navigation navigationMenu={navigationMenu} />

            <div className="page-title">
                <h1>포인트</h1>
            </div>

            <div className="main-layout">
                {/* 사이드 네비게이션 메뉴 */}
                <SideNavigation sideMenu={sideMenu} />

                {/* 메인 콘텐츠 */}
                <main className="main-content">
                    <Point pointPageInfo={pointPageInfo} pointInfoList={pointInfoList}/>
                </main>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    )
}

export default MyPagePoint;