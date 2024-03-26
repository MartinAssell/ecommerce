import React from "react";
import Favoritos from "../assets/images/IconsSession/icons8-favoritos.gif";
import User from "../assets/images/IconsSession/icons8-usuario-96.png";
import Carrito from "../assets/images/IconsSession/icons8-carrito-de-compras-96.png";

import "../assets/css/session.css";

function Session({ isLoggedIn }) {
  return (
    <div className="contenedorPrincipalSession">
      <div className="contenedorNotificacion">
        <div>
          <img src={Favoritos} /> Favoritos
        </div>
          <div>
            <img src={User} /> User Name
            <img src={Carrito} /> Carrito
          </div>

      
      </div>
    </div>
  );
}
export default Session;
