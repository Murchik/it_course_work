import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper blue-grey darken-4">
                <a href="/main" class="brand-logo center">Arksite</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/main">Главная </NavLink></li>
                    <li><NavLink to="/add" >Добавить</NavLink></li>
                    <li><NavLink to="/list">Список  </NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
