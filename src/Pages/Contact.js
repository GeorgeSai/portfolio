import React from 'react'
// import {FaFacebook,FaYoutube} from 'react-icons/fa';
// import Ptext from '../Components/Ptext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div className="containe">
        <h1 className = "heroheding">
        {/* <span>This is my </span>
        <span> Contact page</span> */}
        
        </h1>
        <div className="recentprojects">
            <h2>You can follow my social media pages to know more about me. </h2>
            <h3>Please don't hesitate to contact me in case you wanted any help.</h3>
        </div>
        <div>
            {/* <a href="https://www.youtube.com/watch?v=mB4uHPqcU8E" 
            className="youtubesocial">FaYoutube</a> */}
        </div>

        <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com/watch?v=mB4uHPqcU8E" target="_blank" rel="noreferrer"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/george.saifi" target="_blank" rel="noreferrer"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://github.com/GeorgeSai" target="_blank" rel="noreferrer"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://discordapp.com/users/GeorgeSaifi#8189" target="_blank" rel="noreferrer"
        className="discord social">
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
            



        </div>
            
            
        </div>
        
    );
}
