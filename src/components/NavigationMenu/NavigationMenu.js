import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavigationMenu.module.css';

const NavigationMenu = () => {
    return (
        <nav className={s.navigation}>
            <NavLink
                exact
                to="/"
                className={s.menuTitleHome}
                activeClassName={s.active}
            >
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className={s.menuTitleMovies}
                activeClassName={s.active}
            >
                Movies
            </NavLink>
        </nav>
    );
};

export default NavigationMenu;
