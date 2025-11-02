import "./MyPageInquiry.css"
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SideNavigation from "../components/SideNavigation"
import InquiryItem from "../components/InquiryItem"

const MyPageInquiry = () => {
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
            brand: "asdasd",
            productName: "asdasd",
            title: "asdasd",
            date: "asdasd",
            content: "asd",

            response: {
                greeting: "으아ㅏㄱ",
                content: "asdasd",
                closing: "asdasd"
            }
        },
        {
            imageUrl: "asd",
            brand: "asdasd",
            productName: "asdasd",
            title: "asdasd",
            date: "asdasd",
            content: "asd"
        }
    ]

    return (
        <>
            <div className="page-title">
                <h1>문의내역 (고객문의)</h1>
            </div>

            <div className="main-layout">
                {/* 사이드 네비게이션 메뉴 */}
                <SideNavigation sideMenu={sideMenu} />

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