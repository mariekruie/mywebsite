import React, {Component} from 'react';
import deeds from "../../images/deeds.png";
import lots from "../../images/lots.png";
import water from "../../images/water.png";
import game from "../../images/game.png";
import giphy from "../../images/giphy.png";
import notes from "../../images/notes.png";
import "./works.css";

class Works extends Component {

    render(){

        return (
            <div className="works">
                <h3 className="works__title">
                    проэкты.
                </h3>
                <div className="works__content flex">
                    <a href="https://notforgetlist.netlify.app/" className="works__item" target="_blank" rel="noopener noreferrer">
                        <div style={{backgroundImage: `url(${deeds})`}}></div>
                        <p>To-do</p>
                    </a>
                    <a href="https://dice-and-lots.netlify.app" className="works__item" target="_blank" rel="noopener noreferrer">
                        <div style={{backgroundImage: `url(${lots})`}}></div>
                        <p>dice & lots</p>
                    </a>
                    <a href="https://twolitersaday.netlify.app/" className="works__item" target="_blank" rel="noopener noreferrer">
                        <div style={{backgroundImage: `url(${water})`}}></div>
                        <p>water app</p>
                    </a>
                    <a href="https://catchmegame.netlify.app/" className="works__item" target="_blank" rel="noopener noreferrer">
                        <div style={{backgroundImage: `url(${game})`}}></div>
                        <p>catch-me game</p>
                    </a>
                    <a href="https://notesandthoughts.netlify.app/" className="works__item" target="_blank" rel="noopener noreferrer">
                        <div style={{backgroundImage: `url(${notes})`}}></div>
                        <p>notes & thoughts</p>
                    </a>
                    <a href="https://react-mygiphy-api.netlify.app/" className="works__item" target="_blank" rel="noopener noreferrer">
                        <div style={{backgroundImage: `url(${giphy})`}}></div>
                        <p>my giphy</p>
                    </a>
                </div>
               
            </div>
        )
    }
}

export default Works;
