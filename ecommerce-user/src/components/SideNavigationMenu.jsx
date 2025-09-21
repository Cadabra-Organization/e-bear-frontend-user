import React, { useState } from 'react';
import './SideNavigationMenu.css';
import { ChevronRightIcon, ChevronDownIcon } from '../components/CustomTag';

function SideNavigationMenu({ sideMenu }) {
    const [openStates, setOpenStates] = useState({});
    const toggleMenu = (index) => {
        setOpenStates(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            {
                sideMenu.map((item, index) => (
                    <div className="nav-item" key={index}>
                        <div
                            className="nav-row"
                            onClick={() => toggleMenu(index)}
                        >
                            <span className="nav-title">{item.title}</span>
                            {item.subMenu ?
                                <ChevronDownIcon className="nav-icon" />
                                : <ChevronRightIcon className="nav-icon" />}
                        </div>

                        {item.subMenu && (
                            <div className={`sub-list ${openStates[index] ? 'open' : ''}`}>
                                <SideNavigationMenu sideMenu={item.subMenu} />
                            </div>
                        )}

                    </div>
                ))}
        </>
    );
}

export default SideNavigationMenu;