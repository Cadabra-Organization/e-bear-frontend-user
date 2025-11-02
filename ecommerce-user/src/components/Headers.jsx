import React from 'react';
import './Headers.css';
import { Input, SearchIcon, BellIcon, UserIcon, HeartIcon, HomeIcon } from '../components/CustomTag';
import { Link } from 'react-router-dom';


function Headers() {
    return (
      <header className="ebear-header">
        <div className="header-content">
          {/* 로고 */}
          <div className="logo-section">
            <Link className="header-link logo"to="/"><h1>eBEAR</h1></Link>
          </div>

          {/* 검색바 */}
          <div className="search-section">
            <div className="search-container">
              <Input placeholder="검색어를 입력해 주세요." className="search-input" />
              <div className="search-button">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* 우측 아이콘들 */}
          <div className="header-right">
            <div className="header-links">
              <Link className="header-link"to="/login">로그인</Link>
              <span className="header-link">고객센터</span>
              <span className="header-link">이용안내</span>
            </div>
            <div className="header-icons">
              <BellIcon className="icon" />
              <Link className="header-link"to="/mypage/userinfo"><UserIcon className="icon" /></Link>
              <Link className="header-link"to="/mypage/wishlist"><HeartIcon className="icon" /></Link>
              <Link className="header-link"to="/"><HomeIcon className="icon" /></Link>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Headers;