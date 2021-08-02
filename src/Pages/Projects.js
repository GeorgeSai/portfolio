import React from 'react'
// import Ptext from '../Components/Ptext'
// import { Link } from 'react-router-dom';
import pic2 from '../Images/pic2.png';
import pic3 from '../Images/pic3.png'

export default function Projects() {
    return (
        <div className="containe">
        <h1 className = "heroheding">
       
        <span> Projects page</span></h1>
        <div className="recentprojects">
            <h2>Some of the projects that I worked on can be seen below.</h2>
        </div>
        <div className="project1">
       <p>Day of The Dead</p>
       <a href="https://dayofthedead.holiday/" target="_blank" rel="noreferrer">Click here to see all about this project</a>
       {/* <a target="_blank" href="https://dayofthedead.holiday/"></a> */}
        {/* <Link to={{ pathname:"https://dayofthedead.holiday/"  }} target="_blank" /> */}
        
        </div>{/*this is the div that is responsible for the website link*/}
           
            <div><img src={pic2} alt="Pic"/></div> {/* this is whre the pic is rendered */}

        <div>
            <p className="project2">Web apps</p>
            <a href="http://www.francoisrisoud.com/" target="_blank" rel="noreferrer">If you want to see more of this project. Press here</a>
            <img src={pic3} alt="Pic3"/>
            
        </div>
        
        
    </div> //the div that contains all the others

        

        
    );
}

