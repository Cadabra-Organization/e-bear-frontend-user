import React, { useState } from 'react';
import './SideNavigationMenu.css';
import { ChevronRightIcon, ChevronDownIcon } from '../components/CustomTag';
import { useNavigate } from 'react-router-dom';

function SideNavigationMenu({ sideMenu }) {
    const navigate = useNavigate();
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
                            {item.subMenu ?
                                <span className="nav-title">{item.title}</span>
                                : <span className="nav-title" onClick={() => navigate(item.link)}>{item.title}</span>}
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