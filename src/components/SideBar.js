import React, { useState } from "react";
import logoSuper from "../assets/images/logosSupermercados/logotipo-supermercado_23-2148459011.avif";
import delivery from "../assets/images/logosSupermercados/icons8-entrega-100.png";

import "../assets/css/sidebar.css";

function SideBar() {
  const [mostrarSidebar, setMostrarSidebar] = useState(false);

  return (
    <div
      className={`Contenedor-sidebar ${mostrarSidebar ? "mostrar-sidebar" : ""}`}
      onMouseEnter={() => setMostrarSidebar(true)}
      onMouseLeave={() => setMostrarSidebar(false)}
    >
      <img src={logoSuper} alt="logo-DH.png" />
      <div className="borderBeige">
        <img src={delivery} />
        Envíos a Domicilio
      </div>
      <div className="borderBeige-inf">
        Registrate acá y te bonificamos el primer envío
      </div>
      <div className="slide-opinion">
        <div className="slide-opinion-tab">
          Tu opinión
          <div />
          <div>Comparti tu experiencia con nosotros y ayudános a seguir</div>
        </div>
        <section className="carrouselOfertas"></section>
        <section className="carrouselOfertas"></section>
        <section className="carrouselOfertas"></section>
      </div>
    </div>
  );
}

export default SideBar;
