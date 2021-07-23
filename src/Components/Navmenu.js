import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Navmenu(){
    return(
        <div>
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/Projects">Projects</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}