import React from 'react';
import './Headers.css';
import { Input, SearchIcon, BellIcon, UserIcon, HeartIcon, HomeIcon } from '../components/CustomTag';


function Headers() {
    return (
      <header className="ebear-header">
        <div className="header-content">
          {/* 로고 */}
          <div className="logo-section">
            <h1 className="logo">eBEAR</h1>
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
              <span className="header-link">로그인</span>
              <span className="header-link">고객센터</span>
              <span className="header-link">이용안내</span>
            </div>
            <div className="header-icons">
              <BellIcon className="icon" />
              <UserIcon className="icon" />
              <HeartIcon className="icon" />
              <HomeIcon className="icon" />
            </div>
          </div>
        </div>
      </header>
    )
}

export default Headers;