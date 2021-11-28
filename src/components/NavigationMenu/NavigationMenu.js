import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </nav>
    );
};

export default NavigationMenu;
