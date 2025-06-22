import React from 'react';
import './Navigation.css';
import { MenuIcon } from '../components/CustomTag';

function Navigation({ navigationMenu }) {
    return (
        <nav className="navigation">
            <div className="nav-content">
                <div className="menu-button">
                    <MenuIcon className="menu-icon" />
                </div>
                <div className="nav-links">
                    {
                        navigationMenu.map((item, index) => (
                            index == 0 ? (
                                <span className="nav-link active" key={index}>
                                    {item.title}</span>
                            ) : (
                                <span className="nav-link" key={index}>
                                    {item.title}</span>
                            )))
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navigation;