import { useState } from "react"
import "./MyPageProdList.css"
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SideNavigation from "../components/SideNavigation"

// 상품 목록 전체를 렌더링하는 컴포넌트
const ProductGrid = () => {
    // 상품 데이터
    const products = [
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N',
            price: 89900,
            salePrice: null,
            rating: null,
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N',
            price: 89900,
            salePrice: null,
            rating: null,
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N',
            price: 89900,
            salePrice: 71920,
            rating: null,
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N',
            price: 89900,
            salePrice: null,
            rating: 5.0,
            reviewCount: 3,
        },
    ];

    return (
        <div className="product-grid">
            {/* 상품 데이터를 map으로 순회하며 ProductCard를 렌더링 */}
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

// 개별 상품 카드 하나를 렌더링하는 컴포넌트
const ProductCard = ({ product }) => {
    // 가격에 콤마를 추가하는 함수
    const formatPrice = (price) => price.toLocaleString('ko-KR');
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} />
            </div>
            <div className="product-details">
                <span className="product-brand">{product.brand}</span>
                <p className="product-name">{product.name}</p>

                {/* salePrice가 있을 경우와 rating이 있을 경우를 조건부 렌더링 */}
                {product.salePrice ? (
                    <div className="product-price">
                        <span className="original-price">{formatPrice(product.price)}원</span>
                        <span className="sale-info">
                            <span className="sale-percentage">20%</span>
                            <span className="sale-price">{formatPrice(product.salePrice)}원</span>
                        </span>
                    </div>
                ) : product.rating ? (
                    <div className="product-price-rating">
                        <span className="normal-price">{formatPrice(product.price)}원</span>
                        <span className="product-rating">★ {product.rating.toFixed(1)} ({product.reviewCount})</span>
                    </div>
                ) : (
                    <div className="product-price">
                        <span className="normal-price">{formatPrice(product.price)}원</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const MyPageProdList = () => {
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

                    <ProductGrid />

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

export default MyPageProdList