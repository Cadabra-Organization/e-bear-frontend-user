import { useEffect, useState } from "react";
import "./MainPage.css";
import Navigation from "../components/Navigation";
import Slider from 'react-slick';
import useMediaQuery from "../hooks/useMediaQuery";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import memberBoon from '../../public/memberBoon.png';
import Product from '../components/Product';
import ReviewCard from '../components/ReviewCard';

const MainPage = () => {
    const isMobile768 = useMediaQuery('(max-width: 768px)');
    const isMobile1250 = useMediaQuery('(max-width: 1250px)');
    const isMobile1400 = useMediaQuery('(max-width: 1400px)');
    const [productShowCnt, setProductShowCnt]  = useState(6);

    useEffect(() => {
        if(isMobile768) {
            setProductShowCnt(4);
        } else if(isMobile1250) {
            setProductShowCnt(4);
        } else if(isMobile1400) {
            setProductShowCnt(4);
        } else {
            setProductShowCnt(6);
        }
    }, [isMobile768, isMobile1250, isMobile1400]);

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

    const mainBannerList = [
        {
            name: "mainBanner1",
            image: 'https://ad-img.gmarket.com/ADS/Contents_/2025_11_07_01_50_10/63ca469856fa4832.JPG',
            description: "",
        },
        {
            name: "mainBanner2",
            image: 'https://ad-img.gmarket.com/ADS/Contents_/2025_11_10_05_02_41/22c9074a6a81464e.JPG',
            description: "",
        },
    ];
    
    const mainSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const reviewSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const productData = [
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
        {
            id: 5,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N_4',
            price: 89900,
            salePercentage : null,
            rating: 5.0,
            reviewCount: 3,
        },
        {
            id: 6,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&crop=center",
            brand: '유닉스',
            name: '오브제 헤어 드라이기 UN-B1919N_4',
            price: 89900,
            salePercentage : null,
            rating: 5.0,
            reviewCount: 3,
        },
    ];

    const review = [
        {rate: 3.5, title: "제목1", context: "내용", name: "이름", date: "2025-07-26"},
        {rate: 3.5, title: "제목2", context: "내용", name: "이름", date: "2025-07-26"},
        {rate: 3.5, title: "제목3", context: "내용", name: "이름", date: "2025-07-26"},
        {rate: 3.5, title: "제목4", context: "내용", name: "이름", date: "2025-07-26"},
        {rate: 3.5, title: "제목5", context: "내용", name: "이름", date: "2025-07-26"},
        {rate: 3.5, title: "제목6", context: "내용", name: "이름", date: "2025-07-26"},
    ];

    return (
        <div className="main-container">
            <Navigation navigationMenu={navigationMenu} />

            <Slider {...mainSettings}>
                {mainBannerList.map(item => 
                    <div className="image-container">
                        <img src={item.image} alt={item.name}/>
                    </div>
                )}
            </Slider>

            <div className="product-container">
                <div className="sale-container">
                    <span className="title-font">오늘의 특가</span>
                    <div className="product-grid-main">
                        {productData.slice(0, productShowCnt).map(product => (
                            <Product product={product} />
                        ))}
                    </div>
                </div>
                <div className="hot-container">
                    <span className="title-font">가장 많이 팔리는 물품</span>
                    <div className="product-grid-main">
                        {productData.slice(0, productShowCnt).map(product => (
                            <Product product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="member-boon-container">
                <img src={memberBoon} width='100%' />
            </div>

            <div className="review-container">
                <span className="review-title-font">Review</span>
                <Slider {...reviewSettings}>
                    {review.map((data, index) => 
                        <ReviewCard key={index}  rate={data.rate} title={data.title} context={data.context} name={data.name} date={data.date} />
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default MainPage;