import React from 'react';
import './styles.css';
import home from '../../assets/home.png';
import profile from '../../assets/profile.png';
import history from '../../assets/history.png';
import mas from '../../assets/moree.png';


function Menu() {
    
    return(
        
        <div className="menuFrame">
            <div className="containerMenu">
                <div className="options">
                    
                    <div className="home" >
                        <a className="optionTittle" href="#home">
                        <img src={home} className="imgHome"></img>Inicio</a>
                    </div>
                    
                    <div className="history">
                        <a className="optionTittle" href="#history">
                        <img src={history} className="imgHome"></img>Historial</a>
                    </div>
                    <a href="#invest" className="buttonInvest"></a>
                    <p className="textInvest">Ahorrar</p>
                    <div className="profile">
                        <a className="optionTittle" href="#profile">
                        <img src={profile} className="imgHome"></img>Mi perfil</a>
                    </div>
                    <div className="more">
                        <a className="optionTittle" href="#more">
                        <img src={mas} className="imgHome"></img>Mas</a>
                    </div>
                </div>
            </div>
        </div>  
 
    )
}

export default Menu;