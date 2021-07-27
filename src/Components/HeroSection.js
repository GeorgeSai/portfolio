import React from 'react'
import HeroImg from '../Images/comp2.png';

export default function HeroSection() {
    return (
        <div>
            <div className="container">
                <h1 className = "heroheading">
                <span>Hello This is</span>
                <span>George Saifi</span>
                </h1>
                <div className="heroimg">
                    <img src={HeroImg} alt="There"/>
                </div>
            </div>
        </div>
    );
}
