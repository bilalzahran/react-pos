import React from 'react';

export const Sidebar = () => (
    <div className="sidebar">
        <h3>Main Dish</h3>
        <ul>
            <li><img src="/images/logo/noodles.svg" alt="menu-logo"/>Bakmi</li>
            <li><img src="/images/logo/meatball.svg" alt="menu-logo"/>Bakso</li>
            <li><img src="/images/logo/meat.svg" alt="menu-logo"/>Beef Steak</li>
            <li><img src="/images/logo/rice.svg" alt="menu-logo"/>Nasi Goreng</li>
        </ul>

        <h3>Drinks</h3>
        <ul>
            <li><img src="/images/logo/coffee.svg" alt="menu-logo"/>Cofee</li>
            <li><img src="/images/logo/tea.svg" alt="menu-logo"/>Tea</li>
            <li><img src="/images/logo/milk.svg" alt="menu-logo"/>Milk Based</li>
        </ul>
    </div>
)