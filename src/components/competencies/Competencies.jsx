import React from 'react';
import './competencies.css';

const Competencies = () => {
    return (
        <div className="competencies">
            <div className="competencies__item">
                <h3 className="item-title">
                    технические компетенции.
                </h3>
                <ul>
                    <li>HTML, CSS, SCSS, JavaScript, jQuery, Gulp, React, Redux, MySQL, Git </li>
                    <li>Figma, Photoshop, Illustrator, InDesign, Lightroom  </li>
                </ul>
            </div>
            <div className="competencies__item">
                <h3 className="item-title">
                креативные компетенции.
                </h3>
                <ul>
                    <li> брендинг, графический дизайн, инфографика, art direction</li>
                </ul>
            </div>
            <div className="competencies__item">
                <h3 className="item-title">
                коммуникационные компетенции.
                </h3>
                <ul>
                    <li>выступление и презентация.</li>
                    <li className="item-languages">
                        <p>[ en ] - свободное владение</p>
                        <p>[ es ] - свободное владение</p>
                        <p>[ nl ] - средний</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Competencies;