import React from "react";
import "./MyPageHeader.css";
import { MenuIcon } from "./CustomTag";

const MyPageHeader = ({title, toggleSidebar}) => {
    return (
        <div className="page-title">
            <div className="nav-content" onClick={toggleSidebar}>
                <div className="menu-button">
                    <MenuIcon className="menu-icon" />
                </div>
            </div>
            <h1>{title}</h1>
        </div>
    )
}

export default MyPageHeader;