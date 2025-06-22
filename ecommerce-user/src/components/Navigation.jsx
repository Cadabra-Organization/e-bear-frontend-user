import React from 'react';
import './Navigation.css';
import { MenuIcon } from '../components/CustomTag';

function Navigation() {
    return (
        <nav className="navigation">
                <div className="nav-content">
                    <div className="menu-button">
                    <MenuIcon className="menu-icon" />
                    </div>
                    <div className="nav-links">
                    <span className="nav-link active">HOT</span>
                    <span className="nav-link">세일</span>
                    <span className="nav-link">라이브</span>
                    <span className="nav-link">이벤트</span>
                    <span className="nav-link">회원혜택</span>
                    </div>
                </div>
                </nav>
    )
}

export default Navigation;