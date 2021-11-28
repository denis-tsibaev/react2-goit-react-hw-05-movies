import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavigationMenu.module.css';

const NavigationMenu = () => {
    return (
        <nav>
            <NavLink to="/" className={s.menuTitleHome}>
                Home
            </NavLink>
            <NavLink to="/movies" className={s.menuTitleMovies}>
                Movies
            </NavLink>
        </nav>
    );
};

export default NavigationMenu;
