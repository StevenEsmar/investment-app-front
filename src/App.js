import React from 'react';
import './App.css';
import iconNotify from '../src/assets/notify.png';
import InvestCard from './components/InvestCard/InvestCard';
import Goals from './components/Goals/Goals';
import Blog from './components/Blog/Blog';
import Media from './components/Media/Media';
import Portfolio from './components/Portfolio/Portfolio';
import Menu from './components/Menu/Menu';
import data from './data/camila.json';

const dataPersonal = data.map((data) => {


  return (
    <div className="bodypage">

      
      <div className="title">
      <p className="textheader">Hola, {data.name}</p>
      </div>
      <a href="#notitications"><div className="icon"><img src={iconNotify}/></div></a>
      <div className="investedCard">
      <InvestCard/>
      </div>
      <div className="goalsDiv">
      <Goals/>
      </div>
      <div className="portfolioDiv">
      <Portfolio/>
      </div>
      <div className="mediaDiv">
      <Media/>
      </div>
      <Blog/>
      <Menu/>
            
    </div>
  )
  }
)

function App() {
  return dataPersonal
}
export default App;
