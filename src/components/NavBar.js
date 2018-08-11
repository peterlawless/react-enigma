import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <NavLink exact to='/'>Lamp Board</NavLink>
            </div>
            <div>
                <NavLink to='/plugboard'>Plug Board</NavLink>
            </div>
            <div>
                <NavLink to='/messenger'>Enigma Messenger</NavLink>
            </div>
        </div>
    );
}

export default NavBar;
