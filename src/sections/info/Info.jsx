import React, { Component } from 'react';
import mk from "../../images/mk.jpg";
import mk2 from "../../images/mk2.JPG";
import "./info.css";

class Info extends Component {
    state= {
        infoGreeting: "info__greeting",
        infoImgOne: "info__img one",
        infoImgTwo: "info__img two",
        infoTextOne: "info__text one",
        infoTextTwo: "info__text two"
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.scrollTo(0, 0);
    }



    handleScroll = () => {
        let offset = window.pageYOffset;

        if(offset === 0){
            this.setState({
                infoGreeting: "info__greeting",
                infoImgOne: "info__img one",
                infoImgTwo: "info__img two",
                infoTextOne: "info__text one",
                infoTextTwo: "info__text two"
            })
        } 
        else if(offset !== 0 && offset< this.props.height / 3){
            this.setState({
                infoGreeting: "info__greeting fade-out",
                infoImgOne: "info__img one fade-out",
                infoImgTwo: "info__img two fade-in",
                infoTextOne: "info__text one fade-in",
                infoTextTwo: "info__text two"
            })
        }
        else if(offset>= this.props.height / 3 && offset<this.props.height){
            this.setState({
                infoGreeting: "info__greeting fade-out",
                infoImgOne: "info__img one fade-out",
                infoImgTwo: "info__img two fade-in",
                infoTextOne: "info__text one fade-in",
                infoTextTwo: "info__text two"
            })
        }
        else{
            this.setState({
                infoGreeting: "info__greeting fade-out",
                infoImgOne: "info__img one fade-out",
                infoImgTwo: "info__img two fade-in",
                infoTextOne: "info__text one fade-out",
                infoTextTwo: "info__text two fade-in"
            })
        }
    }

    render(){

        const {infoGreeting, infoImgOne, infoImgTwo, infoTextOne,infoTextTwo} = this.state;

        return (
            <div className="info container">
            <div className="info__wrapper container">


                <div className={infoImgOne} style={{ backgroundImage: `url(${mk2})` }}></div>

                <div className={infoImgTwo} style={{ backgroundImage: `url(${mk})` }}></div>
    
                <div className={infoGreeting}>
                    <h1>Привет</h1>
                    <h1>Hola</h1>
                    <h1>Hey</h1>
                    <h1>Hoi</h1>
                    <h1>Привет</h1>
                </div>

                <div className={infoTextOne}>
                    <p>Я начинающий фронтенд разработчик с бэкграундом в области брендинга и коммуникационных технологий. 
                    </p>
                </div>
                <div className={infoTextTwo}>
                    <p>
                    Полтора года назад я погрузилась в мир веб разработки и с тех пор я ежедневно изучаю инструменты программирования, чтобы расти в профессии. 
                    Умею и люблю работать в команде. Поэтому я ищу тебя моя будущая команда.
                    </p>
                </div>
                
            </div>
        </div>
        )
    }
}

export default Info;
