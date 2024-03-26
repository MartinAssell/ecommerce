import React from "react";
import { Link } from 'react-router-dom';
import '../assets/css/generos.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

const iconosGeneros = {
  "Almacén": require("../assets/images/iconosCategorías/comestibles.png"),
  "Mascotas": require("../assets/images/iconosCategorías/pet-food.png"),
  "Comidas Listas": require("../assets/images/iconosCategorías/pizza.png"),
  "Electrodomésticos": require("../assets/images/iconosCategorías/electrodomésticos.png"),
  "Limpieza": require("../assets/images/iconosCategorías/limpieza.png"),
  "Higiene": require("../assets/images/iconosCategorías/higiene.png"),
  "Hogar": require("../assets/images/iconosCategorías/mantenimiento.png"),
  "Panadería":require("../assets/images/iconosCategorías/pan.png"),
  "Tecnología":require("../assets/images/iconosCategorías/notebook.png"),
};

function Genres(props) {
  const gruposDeTres = [];
  for (let i = 0; i < props.generos.length; i += 3) {
    gruposDeTres.push(props.generos.slice(i, i + 3));
  }

  return (
    <section className="seccionGeneros">
      <h2>Categorías del Súper!</h2>
      <div className="contenedorBarraYGeneros">
        <div className="Cuadrado">
          {gruposDeTres.map((grupo, index) => (
            <div className="grupoDeTres" key={index}>
              {grupo.map((genero, idx) => (
                <div className="genero" key={idx}>
                  <div className="iconoYTexto">
                    <img className="iconos" src={iconosGeneros[genero]} alt={genero} />
                    <span className="spanGenero">{genero}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="main-container">
      <ul className="contenedorNavBar">
        <li className="cont-index">
          <Link to="/promociones">Promociones</Link>
        </li>
        <li className="cont-index">
          {/* <Link to="/about">About</Link> */}
        </li>
        <li className="cont-index">
          {/* <Link to="/contact">Contact</Link> */}
        </li>
      </ul>
    </nav>
  );
}

export {Genres, Navbar};
