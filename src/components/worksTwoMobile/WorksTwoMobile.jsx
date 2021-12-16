import React, {Component} from 'react';
import gm from "../../images/gm.png";
import mogo from "../../images/mogo.png";
import desire from "../../images/desire.png";
import gpt from "../../images/gpt.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

class WorksTwoMobile extends Component {

    state = { 
        works: [
            {
                title:'avtoclub gm',
                image: gm,
                url: 'https://avtoclub-gm.ru/'
            },
            {
                title:'web layout',
                image: mogo,
                url: 'https://layout-web-two.netlify.app/'
            },
            {
                title:'web layout',
                image: desire,
                url: 'https://layout-web-one.netlify.app/'
            },
            {
                title:'gpt',
                image: gpt,
                url: 'https://funtik.netlify.app/'
            },
    
        ],
        idx: 0
    }


    handlePrevClick = () => {
        if(this.state.idx >0){
          this.setState({
            idx: this.state.idx - 1
          })
        } else{
          this.setState({
            idx: this.state.works.length-1
          })
        }
      }
    
      handleNextClick = () => {
       if(this.state.idx < this.state.works.length-1){
          this.setState({
            idx: this.state.idx + 1
          })
        }else{
          this.setState({
            idx: 0
          })
        }
      }

    render(){
        const {works, idx} = this.state;
        return (
            <div className="works-mobile">
                <h3 className="works-mobile__title">
                    вэб-сайты.
                </h3>

                <div className="works-mobile__content flex">
                    <div className="works-mobile__btn" onClick={this.handlePrevClick}>   
                      <FontAwesomeIcon icon={faAngleLeft} size="1x"/>
                    </div>


                    <a href={works[idx].url} className="works-mobile__item" target="_blank" rel="noopener noreferrer">
                        <div style={{backgroundImage: `url(${works[idx].image})`}}></div>
                        <p>{works[idx].title}</p>
                    </a>

                    <div className="works-mobile__btn" onClick={this.handleNextClick}>   
                      <FontAwesomeIcon icon={faAngleRight} size="1x"/>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default WorksTwoMobile;
