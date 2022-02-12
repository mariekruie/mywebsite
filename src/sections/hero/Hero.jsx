import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './hero.css';

class Hero extends Component {


    render(){

        return (

            <div className="hero container">
                <div className="hero__wrapper flex jc-c ai-c">
   
                
                    <div className="hero__name">
                            <h1>Maria Kryukova</h1>
                            <p>[ web developer ]</p>
                    </div>

                    <div className="hero__social">
                        <a className="hero__social--icon" href="https://www.linkedin.com/in/mariakryukova/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a>
                        <a className="hero__social--icon" href="https://github.com/mariekruie" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size="1x"/></a>
                        <a className="hero__social--icon" href="mailto:kryukova.marie@gmail.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEnvelope} size="1x"/></a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
 
export default Hero;
