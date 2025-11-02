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

    const cuponList = [
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' },
        {price: 1000, condition: 'gt', conditionPrice: 10000, startDt: '2025.10.18', endDt: '2025.10.19', publisher: '발행처' }
    ];

    return ( 
        <>
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
        </>
    )
}

export default MyPageCupon;