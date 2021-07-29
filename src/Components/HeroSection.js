import React from 'react'
import HeroImg from '../Images/comp2.png';
import Ptext from './Ptext';
import Button from './Button'

export default function HeroSection() {
    return (
        <div>
            <div className="container">
                <h1 className = "heroheading">
                <span>Hello This is</span>
                <span> George Saifi</span>
                </h1>
                <div className="heroimg">
                    <img src={HeroImg} alt="There"/>
                </div>
                <div className="heroinfo">
                    <Ptext>I am a Web Developer. I am currently working as a full stack developer</Ptext>


                    <h3>About:</h3>
                    <p>I am a computer science gradaute. Based in Lebanon. I like listening to music while working on my personal porjects. In my free time I like to swim and have long walks with my dog in nature, in other to forget about one's and zero's a bit.</p>
                    
                    <h3>Services:</h3>
                    <h4 style={{color:'red'}}>Front End Development:</h4>
                    <p>Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites. This also may include a CMS, API's or other integrations. </p>
                    <h4 style={{color:'red'}}>Back End Development:</h4>
                    <p>Back End Developemnt is building the server part of a website. Using a database, a server. Like php and MySQL.</p>



                    <Button btnLink="/projects" btnText="See my projects" />
                </div>
            </div>
        </div>
    );
}
