import React, {Component} from 'react';
import deeds from "../../images/deeds.png";
import lots from "../../images/lots.png";
import water from "../../images/water.png";
import game from "../../images/game.png";
import giphy from "../../images/giphy.png";
import notes from "../../images/notes.png";
import gm from "../../images/gm.png";
import mogo from "../../images/mogo.png";
import desire from "../../images/desire.png";
import gpt from "../../images/gpt.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import './works-mobile.css';

class WorksMobile extends Component{

    state = { 
        works: [
            {
                title:'To-Do',
                image: deeds,
                url: 'https://notforgetlist.netlify.app/'
            },
            {
                title:'Dice & lots',
                image: lots,
                url: 'https://dice-and-lots.netlify.app'
            },
            {
                title:'Water app',
                image: water,
                url: 'https://twolitersaday.netlify.app/'
            },
            {
                title:'Catch me game',
                image: game,
                url: 'https://catchmegame.netlify.app/'
            },
            {
                title:'Notes & thoughts',
                image: notes,
                url: 'https://notesandthoughts.netlify.app/'
            },
            {
                title:'My giphy',
                image: giphy,
                url: 'https://react-mygiphy-api.netlify.app/'
            },
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
                url: 'https://loved-once.netlify.app/'
            },
            {
                title:'gpt',
                image: gpt,
                url: 'https://funtik.netlify.app/'
            }
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

                <div className="works-mobile__content flex jc-c">
                   
                    <a href={works[idx].url} className="works-mobile__img" target="_blank" rel="noopener noreferrer">
                        <div style={{backgroundImage: `url(${works[idx].image})`}}></div>
                    </a>

                    <div className="works-mobile__text flex jc-sb ai-c">
                        <div className="works-mobile__btn" onClick={this.handlePrevClick}>   
                          <FontAwesomeIcon icon={faAngleLeft} size="2x" className="works-icon"/>
                        </div>
                        <p>{works[idx].title}</p>
                        <div className="works-mobile__btn" onClick={this.handleNextClick}>   
                        <FontAwesomeIcon icon={faAngleRight} size="2x" className="works-icon"/>
                        </div>
                    </div>

    
                </div>
               
            </div>
        )
    }

}

export default WorksMobile;

