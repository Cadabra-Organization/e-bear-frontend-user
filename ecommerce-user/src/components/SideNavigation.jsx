import React from 'react';
import './SideNavigation.css';
import { ChevronRightIcon, ChevronDownIcon, Avatar, AvatarFallback, UserIcon } from '../components/CustomTag';

function SideNavigation({ sideMenu }) {
    return (
        <aside className="sidebar">
            {/* 사용자 프로필 */}
            <div className="user-profile">
                <div className="profile-content">
                    <Avatar className="profile-avatar">
                        <AvatarFallback className="avatar-fallback">
                            <UserIcon className="avatar-icon" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="profile-info">
                        <p className="username">유저아이디</p>
                        <p className="user-type">일반회원</p>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {
                    sideMenu.map((item, index) => (
                        item.subMenu ? (
                            <div className="nav-item" key={index}>
                                <span>{item.title}</span>
                                <ChevronDownIcon />
                            </div>
                        ) : (
                            <div className="nav-item" key={index}>
                                <span>{item.title}</span>
                                <ChevronRightIcon />
                            </div>
                        )))
                }
            </nav>
        </aside>
    )
}

export default SideNavigation;