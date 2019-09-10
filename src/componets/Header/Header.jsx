import React, { Component } from 'react';
import './Header.module.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <NavLink exact to='/'>REACT</NavLink>
            </header>
        );
    }
}

export default Header;