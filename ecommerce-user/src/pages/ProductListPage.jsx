import { useState } from "react"
import "./ProductListPage.css"
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SideNavigation from "../components/SideNavigation"

const ProductListPage = () => {
    const formatPrice = (price) => price.toLocaleString('ko-KR');

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

    const products = [
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N_1',
            price: 89900,
            salePercentage : null,
            rating: null,
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N_2',
            price: 89900,
            salePercentage : null,
            rating: null,
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919_3',
            price: 89900,
            salePercentage : 20,
            rating: null,
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N_4',
            price: 89900,
            salePercentage : null,
            rating: 5.0,
            reviewCount: 3,
        },
    ];

    return (
        <div className="ebear-container">
            {/* 헤더 */}
            <Headers />

            {/* 네비게이션 */}
            <Navigation navigationMenu={navigationMenu} />

            <div className="page-title">
                <h1>여성의류</h1>
            </div>

            <div className="main-layout">
                {/* 사이드 네비게이션 메뉴 */}
                <SideNavigation sideMenu={sideMenu} />

                {/* 메인 콘텐츠 */}
                <main className="main-content">
                    <div className="product-select">
                        <select>
                            <option>최신순</option>
                            <option>인기순</option>
                            <option>가격 낮은 순</option>
                            <option>가격 높은 순</option>
                        </select>
                    </div>

                    <div className="product-grid">
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} />
                                </div>
                                <div className="product-details">
                                    <span className="product-brand">{product.brand}</span>
                                    <p className="product-name">{product.name}</p>
                                        <div className="product-price">
                                            {/* 세일 퍼센트 존재할경우 세일가로 표시 */}
                                            {product.salePercentage ? (
                                                <div className="product-price">
                                                    <span className="original-price">{formatPrice(product.price)}원</span>
                                                    <span className="sale-info">
                                                        <span className="sale-percentage">{product.salePercentage}%</span>
                                                        <span className="sale-price">{formatPrice(product.price - ((product.price * product.salePercentage) / 100))}원</span>
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="product-price">
                                                    <span className="normal-price">{formatPrice(product.price)}원</span>
                                                </div>
                                            )}
                                            {/* 별점 표시 */}
                                            {product.rating && (
                                                <div className="product-rating-container"> {/* 클래스 이름을 분리하는 것이 좋습니다. */}
                                                    <span className="product-rating">★ {product.rating.toFixed(1)} ({product.reviewCount})</span>
                                                </div>
                                            )}
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="product-more-button">
                        <button>더보기</button>
                    </div>
                </main>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    )

}

export default ProductListPage