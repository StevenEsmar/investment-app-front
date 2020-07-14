import React from 'react';
import './App.css';
import iconNotify from '../src/assets/notify.png';
import InvestCard from './components/InvestCard/InvestCard';
import Goals from './components/Goals/Goals';
import Blog from './components/Blog/Blog';
import Media from './components/Media/Media';
import Portfolio from './components/Portfolio/Portfolio';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="bodypage">

      
      <div className="title">
        <p className="textheader">Hola, Camila</p>
      </div>
      <a href="#notitications"><div className="icon"><img src={iconNotify}/></div></a>
      
      <InvestCard/>
      <Goals/>
      <Portfolio/>
      <Media/>
      <Blog/>
      <Menu/>
            
    </div>
    
  );
}

export default App;
