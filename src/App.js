import React, {Component} from 'react';
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import { Hero, Info} from './sections';
import {Header, Footer} from './components';
import './App.css';

// const h = document.documentElement.clientHeight;
const h = window.innerHeight;
class App extends Component {


  state={
    height: h,
  }



  render(){

    const {height} = this.state;

    console.log(height);
    
    return (
      <Router>
        <div className="app">
          <Header/>
  
          <Routes >
            <Route path='/' element={<Hero height={height}/>} />
            <Route path='/info' element={<Info height={height}/>}/>
          </Routes>
  
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
