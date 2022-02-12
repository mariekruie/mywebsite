import React, {Component} from 'react';
import mixitup from 'mixitup';
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
import "./works.css";

class Works extends Component {

    componentDidMount(){
        let mixer = mixitup('.works__content', {
            load: {
                filter: '.js'
            },
            "animation": {
                "duration": 511,
                "nudge": false,
                "reverseOut": false,
                "effects": "fade scale(0.64) stagger(47ms)"
            }
        });
    }

    render(){

        return (
            <div className="works">

                <div className="works__wrapper flex jc-sb ai-c">
                    <div className="works__buttons flex">
                   
                        <button class="gallery__btn" data-filter=".js">HTML  CSS  JS</button>
                        <button class="gallery__btn" data-filter=".react">React</button>

                
                    </div>
                    <div className="works__content flex">
                        <a href="https://notforgetlist.netlify.app/" className="works__item mix js" target="_blank" rel="noopener noreferrer">
                            <div style={{backgroundImage: `url(${deeds})`}}></div>
                            <p>To-do</p>
                        </a>
                        <a href="https://dice-and-lots.netlify.app" className="works__item mix js" target="_blank" rel="noopener noreferrer">
                            <div style={{backgroundImage: `url(${lots})`}}></div>
                            <p>dice & lots</p>
                        </a>
                        <a href="https://twolitersaday.netlify.app/" className="works__item mix js" target="_blank" rel="noopener noreferrer">
                            <div style={{backgroundImage: `url(${water})`}}></div>
                            <p>water app</p>
                        </a>
                        <a href="https://catchmegame.netlify.app/" className="works__item mix js" target="_blank" rel="noopener noreferrer">
                            <div style={{backgroundImage: `url(${game})`}}></div>
                            <p>catch-me game</p>
                        </a>
                        <a href="https://notesandthoughts.netlify.app/" className="works__item  mix react" target="_blank" rel="noopener noreferrer">
                            <div style={{backgroundImage: `url(${notes})`}}></div>
                            <p>notes & thoughts</p>
                        </a>
                        <a href="https://react-mygiphy-api.netlify.app/" className="works__item mix react" target="_blank" rel="noopener noreferrer">
                            <div style={{backgroundImage: `url(${giphy})`}}></div>
                            <p>my giphy</p>
                        </a>
                        <a href="https://avtoclub-gm.ru/" className="works__item mix js" target="_blank" rel="noopener noreferrer">
                        <div style={{ backgroundImage: `url(${gm})` }}></div>
                        <p>avtoclub gm</p>
                        </a>
                        <a href="https://layout-web-two.netlify.app/" className="works__item mix js" target="_blank" rel="noopener noreferrer">
                            <div style={{ backgroundImage: `url(${mogo})` }}></div>
                            <p>web layout</p>
                        </a>
                        <a href="https://loved-once.netlify.app/" className="works__item mix js" target="_blank" rel="noopener noreferrer">
                            <div style={{ backgroundImage: `url(${desire})` }}></div>
                            <p>web layout</p>
                        </a>
                        <a href="https://funtik.netlify.app/" className="works__item mix react" target="_blank" rel="noopener noreferrer">
                            <div style={{ backgroundImage: `url(${gpt})` }}></div>
                            <p>gpt</p>
                        </a>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Works;
