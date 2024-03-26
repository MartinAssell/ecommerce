import React from "react";
import fire from "../assets/images/logosSupermercados/42697fire_98982.png"
import '../assets/css/Advertising-Bar.css';

function AdvertisingBar( )  {
    return (
        <div className="advertising-bar">
            <p>
              <img src={fire}/>Hasta 20% OFF + Hasta 6 Cuotas Sin Interés en productos seleccionados de  <a href="#electro">ELECTRO 
              <img src={fire}/> </a>
            </p>
        </div>
    );
}

export default AdvertisingBar;
