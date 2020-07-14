import React from 'react';
import './stylesInvest.css';
import data from '../../data/camila.json';

const dataPersonal = data.map((data) => {
   
    return(
      <div>  
        <div className="invest_card">
          <div className="valueCard">
            <p className="firstText">Eres {data.type}</p>
              <p className="secondText">Tu saldo</p>
                <a className="valueText">{data.balance}</a>
          </div>
          <div className="imgWoman"/>
        </div>
      
        <div className="summary">
            <div className="frame58">
                <div className="valueFrame58">
                    <a className="valueFont58">{data.performance}</a>
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
                    <a className="valueFont55">{data.invest}</a>
                </div>
            </div>
                  
        </div>
      </div>
 
    )
}
)

function InvestCard() {
    return dataPersonal
}
export default InvestCard;