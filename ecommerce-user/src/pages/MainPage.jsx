import { useState } from "react";
import "./MainPage.css";
import Navigation from "../components/Navigation";

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
    
    return (
        <>
            <Navigation navigationMenu={navigationMenu} />
            메인페이지 입니다.
        </>
    )
}

export default MainPage;