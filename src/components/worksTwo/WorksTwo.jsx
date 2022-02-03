import React from 'react';
import gm from "../../images/gm.png";
import mogo from "../../images/mogo.png";
import desire from "../../images/desire.png";
import gpt from "../../images/gpt.png";
import "./worksTwo.css";

const WorksTwo = () => {
    return (
        <div className="worksTwo">
            <h3 className="worksTwo__title">
                вэб-сайты.
            </h3>
            <div className="worksTwo__content flex jc-sb ai-fs">
                <a href="https://avtoclub-gm.ru/" className="worksTwo__item" target="_blank" rel="noopener noreferrer">
                    <div style={{ backgroundImage: `url(${gm})` }}></div>
                    <p>avtoclub gm</p>
                </a>
                <a href="https://layout-web-two.netlify.app/" className="worksTwo__item" target="_blank" rel="noopener noreferrer">
                    <div style={{ backgroundImage: `url(${mogo})` }}></div>
                    <p>web layout</p>
                </a>
                <a href="https://loved-once.netlify.app/" className="worksTwo__item" target="_blank" rel="noopener noreferrer">
                    <div style={{ backgroundImage: `url(${desire})` }}></div>
                    <p>web layout</p>
                </a>
                <a href="https://funtik.netlify.app/" className="worksTwo__item" target="_blank" rel="noopener noreferrer">
                    <div style={{ backgroundImage: `url(${gpt})` }}></div>
                    <p>gpt</p>
                </a>
            </div>

        </div>
    )
}

export default WorksTwo;
