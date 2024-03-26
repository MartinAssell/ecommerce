import React from "react";
import '../assets/css/contentRow.css'
import logoMundo from "../assets/images/icons8-favicon-94.png";


function ContentRow(props) {
    const TituloRectangulo = props.TituloRectangulo;
    const colores = props.colores;
    const imagenes=props.imagenes
    
    return (
        <div className="RowPrincipal"> 
            <h1>Panel de Navegación</h1>
            <div className="ContenedorDeContentRow">
                <div className="ContenedorRectangulos">
                    {TituloRectangulo.map((unTituloRectangulo, i) => (
                        <div key={i} className="Rectangulo-Contenedor" style={{ borderLeft: `5px solid ${colores[i]}`, marginBottom: '20px' }}>
                            <div className="ContenedorListaOrdenada">
                                {unTituloRectangulo}
                                <li className="ListaOrdenada">
                                    <img src={logoMundo} alt="Mundo" className="IconoPequenio" />
                                </li>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContentRow;
