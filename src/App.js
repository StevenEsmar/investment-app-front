import React from 'react';
import './App.css';
import iconNotify from '../src/assets/notify.png';
import iconCircle from '../src/assets/circle.png';
import donut from '../src/assets/s_donut.png';
import donut2 from '../src/assets/s_donut2.png';
import dataCircle from '../src/assets/data.png';
import left from '../src/assets/leftArrow.png';
import right from '../src/assets/rightArrow.png';
import play from '../src/assets/play.png';


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
          
            <p className="tittle2">Tus metas</p>
            <div className="iconCircle"><img src={iconCircle}/></div>
        <div className="goals1">
            <div className="frameIsland">
              <div className="imgIsland"/>
            </div>
            <p className="textGoal1">Viaje a islas Canarias</p>
            <div className="lineVector"></div>
            <div className="frameData">
                <p className="dataGoals">$1.630.000</p>
                <p className="dataGoals2">$8.000.000</p>
                <img src={donut} className="donutIcon"></img>

            </div>
        </div>  
        <div className="goals2">
            <div className="framePc">
              <div className="imgPc"/>
            </div>
            <p className="textGoal2">Macbook Pro</p>
            <div className="lineVector"></div>
            <div className="frameData">
                <p className="dataGoals">$0</p>
                <p className="dataGoals2">$7.000.000</p>
                <img src={donut2} className="donutIcon"></img>
                

            </div>
            
        </div> 
            <p className="tittleBrief">Conoce tu portafolio</p>
            <div className="status">
              <p className="textStatus"> Estratega</p>
            </div>
            <div className="portfolio">
            <img src={dataCircle} className="dataCircle"/>
            <p className="nameRobot">RoboAdvisor</p>
            <p className="numFunding">10 Fondos</p>
            <div className="robot">
                <div className="robotimg"></div>
              </div>
              <div className="frame28">
                
                <div className="logo"></div>
                <div className="frame31">
                    <p className="textframe31">%15</p>
                    
                </div>
                <p className="description1">FIC Old Mutual Efectivo</p>
                <p className="description2">$240.000</p>
                <p className="type">Tipo de activo</p>
                <p className="descriptionType">Renta fija <br/> Depósito a la fija</p>
              </div>
              <img src={left} className="arrowLeft"></img>
              <img src={right} className="arrowRight"></img>
              <p className="advise">Tu dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.</p>
            </div>
            <p className="descriptionRobot">Los P*t@s del ahorro</p>
            <div className="media">
                <div className="thumbImg"></div>
                <div className="vectorMedia"></div>
                <p className="textMedia">Esto es AHORRO</p>
                <p className="textMediaDescription">Conoce como nuestro RobotAdvisor crea el mejor portafolio de inversión para ti.</p>
                <div className="playMedia"><img src={play} className="playImg"></img></div>
            </div>
            <div className="counterMedia">
                <div className="circles"></div>
                <div className="circlesOff"></div>
                <div className="circlesOff"></div>
                
            </div>
            <div className="blogFrame">
                <div className="text1">
                  <div className="textBlog">
                    <p className="textTittle">10 gastos que debes evitar</p>
                    <p className="textDescription1">Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                  </div>
                  <div className="img1"></div>
                </div>

                <div className="text1">
                  <div className="textBlog">
                    <p className="textTittle">10 gastos que debes evitar</p>
                    <p className="textDescription1">Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                  </div>
                  <div className="img2"></div>
                </div>

                <div className="text1">
                  <div className="textBlog">
                    <p className="textTittle">10 gastos que debes evitar</p>
                    <p className="textDescription1">Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                  </div>
                  <div className="img3"></div>
                </div>

            </div>  
          <div className="menuFrame">
            <div className="options">
              <div className="more">

              </div>
              <div className="profile">

              </div>
              <div className="history">

              </div>
              <div className="home">
                  
              </div>

            </div>
            
          </div>  
    </div>
  );
}

export default App;
