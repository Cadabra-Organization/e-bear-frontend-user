import React from 'react';
import './SideNavigation.css';
import { ChevronRightIcon, ChevronDownIcon, Avatar, AvatarFallback, UserIcon } from '../components/CustomTag';

function SideNavigation({ sideMenu, type = true }) {
    return (
        <aside className="sidebar">
            {type ? (
                <div className="user-profile-true">
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
            ) : (
                <div className="user-profile-false">
                    <p className="category">카테고리</p>
                </div>
            )}

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