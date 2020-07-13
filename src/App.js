import React from 'react';
import './App.css';
import iconNotify from '../src/assets/notify.png';
import women from '../src/assets/head.png';

function App() {
  return (
    <div className="bodypage">
      <div className="title">
        <p className="textheader">Hola, Camila</p>
        </div>
        <div className="icon"><img src={iconNotify}/></div>
        <div className="invest_card">
            
            <div className="valueCard">
                <p className="firstText">Eres estratega</p>
                <p className="secondText">Tu saldo</p>
                <a className="valueText">1.570.000</a>
            </div>
            <div className="imgWoman"/>

        </div>
        <div className="summary">
          <div className="frame58">
              <div className="valueFrame58">
                  <a className="valueFont58">-$30.000</a>
              </div>
              <div className="textFrame58">
                <a className="textFont58">Rendimiento</a>
              </div>
          </div>
          <div className="line"/>
          <div className="frame55">
              
              <div className="textFrame55">
                <a className="textFont55">Inversión</a>
              </div>
              <div className="valueFrame55">
                  <a className="valueFont55">$1.600.000</a>
              </div>
          </div>
          

        </div>

      
    </div>
  );
}

export default App;
