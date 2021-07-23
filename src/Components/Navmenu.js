import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose,MdMenu } from 'react-icons/md';
import { useState } from 'react';

const NavmenuStyles = styled.div`
position: fixed;
z-index: 100;
top: 0;
left: 0;
width: 100%;
padding: 1rem 0;
background: #a4b4c4;
ul{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: right;
    li {
        display: inline-block;
        border-radius: 8px;
        transition: .3s ease background-color;
        $:hover {
            background-color: #444;
        }
    }
    a{
        display:inline-block;
        font-family: 'RobotoMono Regular';
        padding :1rem 1rem;
        font-size: 2rem;
        color: #000
        outline: none;
    }
    .active{
        color: #000
    }
}
.mobile-menu-icon{
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline:none;
}
.closeNavIcon{
    display: none;
}
@media only screen and (max-width: 768px){
    .mobile-menu-icon{
        display:block;
    }
    .navItems{
        --top: 1rem;
        transition: .3 ease transform;
        background-color: #fff;
        padding: 2rem;
        width: 90%;
        max-width: 300px;
        border-radius: 12px;
        position: absolute;
        right: 1rem;
        top: var(--top);
        .closeNavIcon{
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        *{
            pointer-events: none;
        }
    }
    li{
        display: block;
        margin-bottom: 1rem;
    }
    }
    
}
`;

export default function Navmenu(){
    const[showNav, SetShowNav] = useState(false);
    return(
        <NavmenuStyles>
        <div classname="mobile-menu-icon">
         <MdMenu></MdMenu>
        </div>
            <ul className={!showNav ? 'navItems hide-item': 'navItems'}>
            <div className="closeNavIcon"
            onClick={()=>SetShowNav(!showNav)}
            role="button"
            onKeyDown={()=>SetShowNav(!showNav)}
            tabIndex={0}>
                <MdClose />
            </div>
                <li>
                <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                <NavLink to="/Projects">Projects</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </NavmenuStyles>
    );
}