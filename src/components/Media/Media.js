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
                <div className="playMedia"><img src={play} className="playImg"></img></div>
            </div>
            <div className="counterMedia">
                <div className="circles"></div>
                <div className="circlesOff"></div>
                <div className="circlesOff"></div>
                
            </div>
        </div>
      
 
    )
}

export default Media;