import React from 'react'

import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Arksite</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/main">Главная</NavLink></li>
                    <li><NavLink to="/add">Добавить</NavLink></li>
                    <li><NavLink to="/list">Список</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
