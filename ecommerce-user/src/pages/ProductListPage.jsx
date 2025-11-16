import Navigation from "../components/Navigation"
import SideNavigation from "../components/SideNavigation"
import "./ProductListPage.css"

const ProductListPage = () => {
    const formatPrice = (price) => price.toLocaleString('ko-KR');

    let sideMenu = [
        {
            title: "전체",
            link: "/product/all",
        },
        {
            title: "상의",
            link: "/product/top",
            subMenu: [
                {
                    title: "전체",
                    link: "/product/top/all",
                },{
                    title: "티셔츠",
                    link: "/product/top/t-shirt",
                },{
                    title: "블라우스/셔츠",
                    link: "/product/top/shirt",
                },{
                    title: "니트/가디건",
                    link: "/product/top/cardigan",
                },
            ]
        },
        {
            title: "하의",
            link: "/product/bottom",
        },
        {
            title: "원피스",
            link: "/product/onepiece",
        },
        {
            title: "티셔츠",
            link: "/product/t-shirt",
        }
    ];

    let navigationMenu = [
        {
            title: "Hot",
            link: "/product/info",
        },
        {
            title: "세일",
            link: "/product/order",
        },
        {
            title: "라이브",
            link: "/product/inquiry",
        },
        {
            title: "이벤트",
            link: "/product/inquiry",
        },
        {
            title: "회원혜택",
            link: "/product/inquiry",
        }
    ];

    const productData = {
        category : '여성의류',
        products : [
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
        ]
    }

    return (
        <div className="ebear-container">
            <Navigation navigationMenu={navigationMenu} />

            <div className="page-title">
                <h1>{productData.category}</h1>
            </div>

            <div className="main-layout">
                <SideNavigation sideMenu={sideMenu} type={false} />

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
                        {productData.products.map(product => (
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
                                                <div className="product-rating-container">
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
        </div>
    )

}

export default ProductListPage