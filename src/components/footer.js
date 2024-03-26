import React from "react";
import '../assets/css/footer.css'
import logoSuper from "../assets/images/logosSupermercados/logotipo-supermercado_23-2148459011.avif";
import Instagram from "../assets/images/footerFavicons/icons8-instagram-100.png";
import facebook from "../assets/images/footerFavicons/icons8-facebook-100.png";
import tiktok from "../assets/images/footerFavicons/icons8-tik-tok-100.png";
import twitter from "../assets/images/footerFavicons/icons8-twitterx-100.png";
import youtube from "../assets/images/footerFavicons/icons8-youtube-100.png";
import linkedin from "../assets/images/footerFavicons/icons8-linkedin-100.png";
import pregunta from "../assets/images/footerFavicons/icons8-pregunta-96.png";


function Footer(props) {
return (
    <div className="contenedorFooter">
      <div className="contenedorLogosRedesSociales">
        <img src={logoSuper} alt="Logo"></img> Seguinos en:{" "}
        <img src={Instagram} alt="Instagram"></img>
        <img src={facebook} alt="Facebook"></img>
        <img src={tiktok} alt="TikTok"></img>{" "}
        <img src={twitter} alt="Twitter"></img>
        <img src={youtube} alt="Youtube"></img>
        <img src={linkedin} alt="LinkedIn"></img>
      </div>
      <div>
        Estamos para ayudarte: ¿Tenés una consulta? ¿En qué te podemos ayudar?{" "}
        <img src={pregunta} alt="Pregunta"></img>
      </div>
      <div className="contenedorTextos">
        <p>Texto 1</p>
        <p>Texto 2</p>
        <p>Texto 3</p>
        <p>Texto 4</p>
      </div>
    </div>
  );
}  

export default Footer;
