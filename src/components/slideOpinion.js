// SlideOpinion.js

import React, { useState } from 'react';
import '../assets/css/slideOpinion.css';

function SlideOpinion() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [containerWidth, setContainerWidth] = useState(30); // Ancho inicial

  const toggleFormulario = () => {
    setMostrarFormulario(prevState => !prevState);
    setContainerWidth(prevWidth => (prevWidth === 30 ? 220 : 30)); // Cambiar el ancho del contenedor al hacer clic
  };

  return (
    <div className="slideOpinionContainer" style={{ width: `${containerWidth}px` }}>
      <div className={`slideOpinion ${mostrarFormulario ? 'active' : ''}`} onClick={toggleFormulario}>
        <h2>Tu opinión nos importa</h2>
        <div className={`formulario-adicional ${mostrarFormulario ? 'active' : ''}`}>
          <h3>Deja tu comentario</h3>
          <button onClick={() => window.location.href = 'URL_DE_TU_PAGINA_DE_COMENTARIOS'}>Ir a página de comentarios</button>
        </div>
      </div>
    </div>
  );
}

export default SlideOpinion;
