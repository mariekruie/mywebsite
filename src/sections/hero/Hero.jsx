import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Competencies, Works, WorksTwo, WorksMobile} from '../../components';
import './hero.css';

class Hero extends Component {

    state= {
        heroCompetencies: "hero__competencies",
        heroWorks: "hero__works",
        heroWorksTwo: "hero__works-two"
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.scrollTo(0, 0);
    }

    handleScroll = () => {
        let offset = window.pageYOffset;

        // console.log(`Offset ${offset}`);

        // console.log(this.props.height)
       
    

        if (offset === 0) {
            // window.scrollTo({
            //     top: 0,
            //     behavior: "smooth"
            // });
            this.setState({
                heroCompetencies: "hero__competencies",
                heroWorks: "hero__works",
                heroWorksTwo: "hero__works-two"
            });
        }
        else if (offset !== 0 && offset< this.props.height / 2) {
            // window.scrollTo({
            //     top: this.props.height / 4,
            //     behavior: "smooth"
            // });
            this.setState({
                heroCompetencies: "hero__competencies fade-out",
                heroWorks: "hero__works fade-in",
                heroWorksTwo: "hero__works-two"
            });
        }
        else{
            // window.scrollTo({
            //     top: this.props.height,
            //     behavior: "smooth"
            // });
            this.setState({
                heroCompetencies: "hero__competencies fade-out",
                heroWorks: "hero__works fade-out",
                heroWorksTwo: "hero__works-two fade-in"
            });
        }
    }

    render(){

        const {heroCompetencies, heroWorks, heroWorksTwo} = this.state;

        let query = window.matchMedia("(max-width: 599px)");

        return (

            <div className="hero container">
                <div className="wrapper container">
                
                    <div className="hero__name flex">
                        <div>
                            <h2 className="name-typewriter">Мария Крюкова</h2>
                            <p class="name-subtitle">[ веб разработчик ]</p>
                        </div>
                        <div className="name-social">
                            <a className="social--icon" href="https://www.linkedin.com/in/mariakryukova/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a>
                            <a className="social--icon" href="https://github.com/mariekruie" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size="1x"/></a>
                            <a className="social--icon" href="mailto:kryukova.marie@gmail.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEnvelope} size="1x"/></a>
                        </div>
                    </div>

                    <div className={heroCompetencies} >
                        <Competencies/>
                    </div>

                    <div className={heroWorks}>
                        {query.matches && <WorksMobile/>}
                        {!query.matches && <Works/>}
                    </div>

                    <div className={heroWorksTwo}>
                        <WorksTwo/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Hero;
