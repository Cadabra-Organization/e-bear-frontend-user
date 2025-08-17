import { useState } from "react"
import "./MyPageUserInfo.css"
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SideNavigation from "../components/SideNavigation"

const MyPageUserInfo = () => {
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
            <Navigation navigationMenu={navigationMenu} />

            <div className="page-title">
                <h1>회원정보</h1>
            </div>

            <div className="main-layout">
                {/* 사이드 네비게이션 메뉴 */}
                <SideNavigation sideMenu={sideMenu} />

                {/* 메인 콘텐츠 */}
                <main className="main-content">
                    <input className="user-input" type="text" placeholder="아이디" />
                    <input className="user-input" type="password" placeholder="비밀번호" />
                    <input className="user-input" type="password" placeholder="비밀번호 확인" />
                    <input className="user-input" type="text" placeholder="이름" />
                    <div className="user-flex">
                        <input className="user-input" type="email" placeholder="이메일" />
                        <button className="user-button">인증</button>
                    </div>
                    
                    <div className="user-flex">
                        <input className="user-input" type="text" placeholder="인증코드" />
                        <button className="user-button">인증</button>
                    </div>
                    <div className="user-flex">
                        <input className="user-input" type="text" placeholder="주소" />
                        <button className="user-button">주소찾기</button>
                    </div>
                    <input className="user-input" type="text" placeholder="핸드폰번호" />
                    <button className="user-button">수정</button>
                </main>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    )

}

export default MyPageUserInfo