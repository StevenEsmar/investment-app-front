import React from 'react';
import './stylesGoals.css';
import donut from '../../assets/s_donut.png';
import donut2 from '../../assets/s_donut2.png';
import iconCircle from '../../assets/circle.png';

function Goals() {
    
    return(
        <div>
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
        </div>
      
 
    )
}

export default Goals;