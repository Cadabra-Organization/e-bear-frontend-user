import { useState } from "react"
import "./PaymentComplete.css"
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const PaymentComplete = () => {
    const formatPrice = (price) => price.toLocaleString('ko-KR');

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
            salePrice: null,
            rating: null,
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N_2',
            price: 89900,
            salePrice: null,
            rating: null,
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919_3',
            price: 89900,
            salePrice: 71920,
            rating: null,
        },
    ];

    const totalPrice = 251720;

    return (
        <div className="ebear-container">
            {/* 헤더 */}
            <Headers />

            {/* 네비게이션 */}
            <Navigation navigationMenu={navigationMenu} />

            <div className="page-title">
                <h1>결제 완료</h1>
            </div>

            <div className="main-layout">

                {/* 메인 콘텐츠 */}
                <main className="main-content">

                    <div className="payment-product-grid">
                        {products.map(product => (
                            <div key={product.id} className="payment-product-card">
                                <div className="payment-product-image-container">
                                    <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} />
                                </div>
                                <div className="payment-product-details">
                                    <span className="payment-product-brand">{product.brand}</span>
                                    <p className="payment-product-name">{product.name}</p>
                                    
                                    {product.salePrice ? (
                                        <div className="payment-product-price">
                                            <span className="payment-original-price">{formatPrice(product.price)}원</span>
                                            <span className="payment-sale-info">
                                                <span className="payment-sale-percentage">20%</span>
                                                <span className="payment-sale-price">{formatPrice(product.salePrice)}원</span>
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="payment-product-price">
                                            <span className="payment-normal-price">{formatPrice(product.price)}원</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 총 합계 */}
                    <div className="payment-total-price-container">
                        합계: <span className="payment-total-price">{formatPrice(totalPrice)}원</span>
                    </div>

                    {/* 주문내역 보기 버튼 */}
                    <div className="payment-order-details-button-container">
                    <button className="payment-order-details-button">주문내역 보기</button>
                    </div>
                </main>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    )

}

export default PaymentComplete