import React, { Component } from 'react';
import pdf from "./cv.pdf";
import "./cv.css";



class CV extends Component {


    render(){

     
        return (
            <div className="cv container">
                <div className="cv__wrapper flex jc-c ai-c">

                        <iframe src={`${pdf}#view=fitH`} title="cv_maria_kryukova"></iframe>
                    
                </div>
            </div>
        )
    }
}

export default CV;
