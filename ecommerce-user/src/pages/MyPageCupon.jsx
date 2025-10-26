import React from "react";
import "./MyPageCupon.css";
import Cupon from "../components/Cupon";
import SideNavigation from "../components/SideNavigation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import Pagination from "@mui/material/Pagination";

const MyPageCupon = () => {
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

    const cuponList = [
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' }
    ];

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
                    {/* 쿠폰 목록 */}
                    <div className="cupon-area">
                        <div className="cupon-search-area">
                            <div className="cupon-search">
                                <input type="text" placeholder="검색어를 입력해주세요." />
                                <select>
                                    <option value={'all'}>전체</option>
                                </select>
                            </div>
                            <hr />
                        </div>

                        <div className="cupon-list">
                            {cuponList.map(data => <Cupon data={data} />)}
                        </div>

                        <Pagination count={10} color="primary" />
                    </div>
                    
                </main>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    )
}

export default MyPageCupon;