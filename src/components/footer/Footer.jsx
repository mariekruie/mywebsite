import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import "./footer.css";

class Footer extends Component{

    // state = {
    //     className: null,
    // }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // handleScroll = () => {
    //     this.setState({
    //         className: 'scrolling'
    //     })
    // }
    render(){
        return (
            <div className="footer container--pdX flex jc-c">
                <FontAwesomeIcon icon={faCaretDown} size="1x"/>
            </div>
        )
    }

}

export default Footer;
