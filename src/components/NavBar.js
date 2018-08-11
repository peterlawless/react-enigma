import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to='/'>Lamp Board</NavLink>
            <NavLink to='/plugboard'>Plug Board</NavLink>
            <NavLink to='/messenger'>Enigma Messenger</NavLink>
        </div>
    );
}

export default NavBar;
