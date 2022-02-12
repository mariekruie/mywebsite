import React, {Component} from 'react';

import { Works, WorksMobile} from '../../components';
import './projects.css';

class Projects extends Component {


    render(){
        let query = window.matchMedia("(max-width: 599px)");

        return (

            <div className="projects container">
                <div className="projects__wrapper">
                    {query.matches && <WorksMobile/>}
                    {!query.matches && <Works/>}
                </div>
            </div>
        )
    }
}

export default Projects;
