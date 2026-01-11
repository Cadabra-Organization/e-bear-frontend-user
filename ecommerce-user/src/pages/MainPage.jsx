import { useState } from "react";
import "./MainPage.css";
import Navigation from "../components/Navigation";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import memberBoon from '../../public/memberBoon.png';

const MainPage = () => {
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
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Navigation navigationMenu={navigationMenu} />

            <Slider {...settings}>
                {mainBannerList.map(item => 
                    <div className="image-container">
                        <img src={item.image} alt={item.name}/>
                    </div>
                )}
            </Slider>

            <div className="product-container">
                <div className="sale-container">
                    <span className="title-font">오늘의 특가</span>
                    <div>
                    </div>
                </div>
                <div className="hot-container">
                    <span className="title-font">가장 많이 팔리는 물품</span>

                </div>
            </div>

            <div className="member-boon-container">
                <img src={memberBoon} width='100%' />
            </div>

            <div className="review-container">
                
            </div>
        </>
    )
}

export default MainPage;