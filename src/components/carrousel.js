import React from "react";
import '../assets/css/carrousel.css'

import promos from "../assets/images/carrousel/promos.avif"
import fideos from "../assets/images/carrousel/fideos.jpeg"
import disco from "../assets/images/carrousel/disco ofertas.jpeg"
import gaseosas from "../assets/images/carrousel/diagaseosas.jpeg"



function Carrousel( ) {
    return (
            <div className="contenedorCarrousel" id="carrouselContainer">
                <ul>
                    <li className="slide"><img src={promos} alt="" /></li>
                    <li className="slide"><img src={fideos} alt="" /></li>
                    <li className="slide"><img src={disco} alt="" /></li>
                    <li className="slide"><img src={gaseosas} alt="" /></li>
                </ul>
            </div>
    );
}

export default Carrousel;


