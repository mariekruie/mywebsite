import React, {Component} from 'react';
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import { Hero, About, Projects, CV} from './sections';
import {Header, Footer} from './components';
import './App.css';




class App extends Component {


  render(){
    
    return (
      <Router>
        <div className="app">
          <Header/>
  
          <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/cv' element={<CV/>}/>
          </Routes>
  
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
