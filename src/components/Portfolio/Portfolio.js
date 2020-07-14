import React from 'react';
import './stylesPortfolio.css';
import dataCircle from '../../assets/data.png';
import left from '../../assets/leftArrow.png';
import right from '../../assets/rightArrow.png';

function Portfolio() {
    
    return(
        <div>
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
        </div>
      
 
    )
}

export default Portfolio;