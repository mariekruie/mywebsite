import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import mk2 from "../../images/mk2.JPG";
import './about.css';

class About extends Component {


    render(){

        return (

            <div className="about container  container--pdX">
                <div className="about__wrapper flex">
                    
                    <div className="about__img" style={{ backgroundImage: `url(${mk2})` }}>
                    </div>    
                
                    <div className="about__text">
                        <div className="about__greeting">
                                    <h1>Привет</h1>
                                    <h1>Hola</h1>
                                    <h1>Hoi</h1>
                                    <h1>Hello,</h1>
                        </div>
                        <p>
                            I am a junior frontend developer with a background in branding and communication technologies. 
                            About one and half years ago I got introduced to the magic world of computer languages. As a lover of human languages I challanged myself to learn to communicate with machines and make them do what I want. Ever since my every day is filled with VScode, infinite research and learning. Looking to join a team of likeminded and driven people.
                            <div className="about__social flex">
                                <p>Let's get in contact! </p>
                                <div>
                                    <a className="hero__social--icon" href="tel:+79851627822" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faMobileAlt} size="0.8x"/></a>
                                    <a className="hero__social--icon" href="mailto:kryukova.marie@gmail.com" target="_blank" rel="noopener noreferrer"
                                    > <FontAwesomeIcon icon={faEnvelope} size="0.7x"/></a>
                                </div>
                            </div> 
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;
