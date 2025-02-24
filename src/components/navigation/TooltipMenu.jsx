import React from 'react';
import './TooltipMenu.css';

function TooltipMenu({ activeTooltip, setActiveTooltip, items }) {
    return (
        <div className="tooltip">
            <ul>
                {items.map((subItem) => (
                    <li key={subItem.title}>
                        <a href={subItem.link}>{subItem.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TooltipMenu;