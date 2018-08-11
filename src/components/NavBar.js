import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Lamp Board</Link>
            <Link to='/plugboard'>Plug Board</Link>
            <Link to='/messenger'>Enigma Messenger</Link>
        </div>
    );
}

export default NavBar;
