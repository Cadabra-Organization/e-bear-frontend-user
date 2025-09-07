import React from 'react';
import './SideNavigationMenu.css';
import { ChevronRightIcon, ChevronDownIcon } from '../components/CustomTag';

function SideNavigationMenu({ sideMenu }) {
    return (
        <>
        {
            sideMenu.map((item, index) => (
                <div className="nav-item" key={index}>
                    <div className="nav-row">
                        <span className="nav-title">{item.title}</span>
                        {item.subMenu ? <ChevronDownIcon className="nav-icon" /> : <ChevronRightIcon className="nav-icon" />}
                    </div>

                    {item.subMenu ? (
                        <div className="sub-list">
                            <SideNavigationMenu sideMenu={item.subMenu} />
                        </div>
                    ) : null}
                </div>
            ))}
        </>
    );
}

export default SideNavigationMenu;