import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.module.css';

class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <ul>
                    <li><NavLink exact to='/'>Main</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    <li><NavLink to='/messages'>Messages</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Nav;