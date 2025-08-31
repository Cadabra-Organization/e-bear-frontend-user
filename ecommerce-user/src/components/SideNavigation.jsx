import React from 'react';
import './SideNavigation.css';
import { ChevronRightIcon, ChevronDownIcon, Avatar, AvatarFallback, UserIcon } from '../components/CustomTag';

function SideNavigation({ sideMenu, type = true, level = 0 }) {
    if (level == 0) {
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
                    {sideMenu.map((item, index) => (
                        <div className="nav-item" key={index}>
                            <div className="nav-row">
                                <span className="nav-title">{item.title}</span>
                                {item.subMenu ? <ChevronDownIcon /> : <ChevronRightIcon />}
                            </div>

                            {item.subMenu ? (
                                <div className="sub-list">
                                    <SideNavigation sideMenu={item.subMenu} type={type} level={level + 1} />
                                </div>
                            ) : null}
                        </div>
                    ))}
                </nav>
            </aside>
        );
    }

    return (
        <>
            {sideMenu.map((item, index) => (
                <div className="sub-item">
                    <div className="nav-row">
                        <span className="nav-title">{item.title}</span>
                        {item.subMenu ? <ChevronDownIcon /> : <ChevronRightIcon />}
                    </div>

                    {item.subMenu ? (
                        <div className="sub-list">
                            <SideNavigation sideMenu={item.subMenu} type={type} level={level + 1} />
                        </div>
                    ) : null}
                </div>
            ))}
        </>
    );
}



export default SideNavigation;