import React from 'react';
import './stylesMedia.css';
import play from '../../assets/play.png';

function Media() {
    
    return(
        <div>

            <p className="descriptionRobot">Los P*t@s del ahorro</p>
            <div className="media">
                <div className="thumbImg"></div>
                <div className="vectorMedia"></div>
                <p className="textMedia">Esto es AHORRO</p>
                <p className="textMediaDescription">Conoce como nuestro RobotAdvisor crea el mejor portafolio de inversión para ti.</p>
                <a href="#play"><div className="playMedia"><img src={play} className="playImg"></img></div></a>
            </div>
            <div className="counterMedia">
                <div className="circles"></div>
                <a className="circlesOff"></a>
                <div className="circlesOff"></div>
                
            </div>
        </div>
      
 
    )
}

export default Media;