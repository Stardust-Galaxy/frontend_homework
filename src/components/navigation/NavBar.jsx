import { Link } from "react-router-dom";
import TooltipMenu from "./TooltipMenu";
import React, { useState } from "react";

export default function NavBar({ logo }) {
    const [activeTooltip, setActiveTooltip] = useState(null);

    const menuItems = [
        {
            title: 'About Us',
            items: [
                { title: 'Our Team', link: '#team' },
                { title: 'Our History', link: '#history' }
            ]
        },
        {
            title: 'Service',
            items: [
                { title: 'Consulting', link: '#consulting' },
                { title: 'Support', link: '#support' }
            ]
        },
        {
            title: 'Pricing',
            items: [
                { title: 'Basic', link: '#basic' },
                { title: 'Premium', link: '#premium' }
            ]
        }
    ];

    return (
        <nav className="App-nav">
            <Link to="/" className="logo-link">
                <img src={logo} alt="Company Logo" className="logo" />
            </Link>
            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item.title}
                        onMouseEnter={() => setActiveTooltip(item.title)}
                        onMouseLeave={() => setActiveTooltip(null)}
                    >
                        <Link to={item.link}>{item.title}</Link>
                        {activeTooltip === item.title && (
                            <TooltipMenu
                                activeTooltip={activeTooltip}
                                setActiveTooltip={setActiveTooltip}
                                items={item.items}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}