import React, { useState } from 'react';
import './SideMenu.css';
import { ChevronRightIcon } from '../components/CustomTag';
import { Link } from 'react-router-dom';

function SideMenu({ onClose }) {
    // 3depth 이커머스 임시 메뉴 구조
    const ecommerceMenu = [
        {
            title: "브랜드패션",
            subMenu: [
                {
                    title: "패션의류",
                    subMenu: [
                        { title: "여성의류", link: "/product-list" },
                        { title: "남성의류", link: "/product-list" },
                        { title: "언더웨어", link: "/product-list" },
                        { title: "유아동의류", link: "/product-list" },
                    ]
                },
                {
                    title: "잡화",
                    subMenu: [
                        { title: "신발", link: "/product-list" },
                        { title: "가방/잡화", link: "/product-list" },
                        { title: "유아동신발/잡화", link: "/product-list" },
                        { title: "쥬얼리/시계", link: "/product-list" },
                        { title: "수입명품", link: "/product-list" },
                    ]
                },
                {
                    title: "뷰티",
                    subMenu: [
                        { title: "화장품/향수", link: "/product-list" },
                        { title: "바디/헤어", link: "/product-list" },
                    ]
                }
            ]
        },
        {
            title: "유아동",
            subMenu: [
                {
                    title: "유아동 의류",
                    subMenu: [
                        { title: "신생아", link: "/product-list" },
                        { title: "유아", link: "/product-list" },
                        { title: "키즈", link: "/product-list" },
                    ]
                },
                {
                    title: "유아동 용품",
                    subMenu: [
                        { title: "이유식", link: "/product-list" },
                        { title: "기저귀", link: "/product-list" },
                        { title: "수유용품", link: "/product-list" },
                    ]
                }
            ]
        },
        {
            title: "식품·생필품",
            subMenu: [
                {
                    title: "식품",
                    subMenu: [
                        { title: "신선식품", link: "/product-list" },
                        { title: "가공식품", link: "/product-list" },
                        { title: "냉동식품", link: "/product-list" },
                    ]
                },
                {
                    title: "생필품",
                    subMenu: [
                        { title: "세제", link: "/product-list" },
                        { title: "화장지", link: "/product-list" },
                    ]
                }
            ]
        },
        {
            title: "홈데코ㆍ문구ㆍ취미ㆍ반려",
            subMenu: [
                {
                    title: "홈데코",
                    subMenu: [
                        { title: "침구", link: "/product-list" },
                        { title: "커튼", link: "/product-list" },
                    ]
                },
                {
                    title: "문구",
                    subMenu: [
                        { title: "필기구", link: "/product-list" },
                        { title: "다이어리", link: "/product-list" },
                    ]
                }
            ]
        },
        {
            title: "컴퓨터·디지털·가전",
            subMenu: [
                {
                    title: "컴퓨터",
                    subMenu: [
                        { title: "노트북", link: "/product-list" },
                        { title: "데스크탑", link: "/product-list" },
                    ]
                },
                {
                    title: "디지털",
                    subMenu: [
                        { title: "스마트폰", link: "/product-list" },
                        { title: "태블릿", link: "/product-list" },
                    ]
                },
                {
                    title: "가전",
                    subMenu: [
                        { title: "TV", link: "/product-list" },
                        { title: "냉장고", link: "/product-list" },
                    ]
                }
            ]
        },
        {
            title: "스포츠·건강·렌탈",
            subMenu: [
                {
                    title: "스포츠",
                    subMenu: [
                        { title: "운동화", link: "/product-list" },
                        { title: "운동복", link: "/product-list" },
                    ]
                },
                {
                    title: "건강",
                    subMenu: [
                        { title: "건강식품", link: "/product-list" },
                        { title: "운동기구", link: "/product-list" },
                    ]
                }
            ]
        },
        {
            title: "자동차·공구",
            subMenu: [
                {
                    title: "자동차용품",
                    subMenu: [
                        { title: "차량용품", link: "/product-list" },
                        { title: "모터오일", link: "/product-list" },
                    ]
                },
                {
                    title: "공구",
                    subMenu: [
                        { title: "전동공구", link: "/product-list" },
                        { title: "수동공구", link: "/product-list" },
                    ]
                }
            ]
        },
        {
            title: "여행ㆍ도서·e쿠폰",
            subMenu: [
                {
                    title: "여행",
                    subMenu: [
                        { title: "항공권", link: "/product-list" },
                        { title: "호텔", link: "/product-list" },
                    ]
                },
                {
                    title: "도서",
                    subMenu: [
                        { title: "도서", link: "/product-list" },
                        { title: "e북", link: "/product-list" },
                    ]
                }
            ]
        }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = (index) => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setHoveredIndex(null);
        }, 200);
        setHoverTimeout(timeout);
    };

    const handleSubMenuMouseEnter = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
    };

    return (
        <div className="side-menu-wrapper">
            <aside className="side-menu">
                <div 
                    className="side-menu-container"
                    onMouseLeave={handleMouseLeave}
                >
                    {/* 왼쪽 초록색 사이드바 - 1depth */}
                    <nav className="side-menu-nav">
                        {ecommerceMenu.map((firstItem, firstIndex) => (
                            <div 
                                className="menu-item-container" 
                                key={firstIndex}
                                onMouseEnter={() => handleMouseEnter(firstIndex)}
                            >
                                <div className={`menu-item ${hoveredIndex === firstIndex ? 'active' : ''}`}>
                                    <div className="menu-row first-level">
                                        <span className="menu-title">{firstItem.title}</span>
                                        {firstItem.subMenu && (
                                            <ChevronRightIcon className="menu-icon" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* 오른쪽 흰색 패널 - 2depth, 3depth 멀티 컬럼 */}
                    {hoveredIndex !== null && ecommerceMenu[hoveredIndex].subMenu && (
                        <div 
                            className="sub-menu-content-panel"
                            onMouseEnter={handleSubMenuMouseEnter}
                        >
                            <div className="sub-menu-columns-wrapper">
                                {ecommerceMenu[hoveredIndex].subMenu.map((secondItem, secondIndex) => (
                                    <div className="sub-menu-column" key={secondIndex}>
                                        <div className="sub-menu-column-header">
                                            {secondItem.link ? (
                                                <Link 
                                                    to={secondItem.link} 
                                                    className="sub-menu-column-title-link"
                                                >
                                                    <h3 className="sub-menu-column-title">{secondItem.title}</h3>
                                                </Link>
                                            ) : (
                                                <h3 className="sub-menu-column-title">{secondItem.title}</h3>
                                            )}
                                            <div className="sub-menu-column-divider"></div>
                                        </div>
                                        <div className="sub-menu-column-list">
                                            {secondItem.subMenu && secondItem.subMenu.map((thirdItem, thirdIndex) => (
                                                <Link 
                                                    key={thirdIndex}
                                                    to={thirdItem.link || '#'} 
                                                    className="sub-menu-item-link"
                                                >
                                                    {thirdItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="sub-menu-footer">
                                <a href="#" className="footer-link">바로가기 &gt;</a>
                                <a href="#" className="footer-link">해외직구</a>
                            </div>
                        </div>
                    )}
                </div>
            </aside>
        </div>
    );
}

export default SideMenu;

