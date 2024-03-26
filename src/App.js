import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdvertisingBar from "./components/Publicidad";
import ContentRow from "./components/ContentRowMovies";
import SearchBar from "./components/SearchBar";
import Session from "./components/Session";
import SideBar from "./components/SideBar"; 
import SlideOpinion from "./components/slideOpinion"; 
import { Genres, Navbar } from "./components/Genres";
import Carrousel from "./components/carrousel";
import Footer from "./components/footer"; 

import "./App.css";
import './assets/css/sidebar.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <SlideOpinion />
        </header>
        <main>
          <div className="Container">
            <div className="SideBarContainer">
              <SideBar />
            </div>
            <div className="MainContainer">
              <div className="advertsingContainer">
                <AdvertisingBar />
              </div>
              <div className="contenedorSession">
                <Session />
              </div>
              <div className="SearchBarContainer">
                <SearchBar />
              </div>
              <div className="CarrouselContainer">
                <div className="CarrouselWrapper">
                  <Carrousel />
                </div>
              </div>
              <div className="Content">
                <div className="contenedorDashboard">
                  <ContentRow
                    TituloRectangulo={["Promociones", "Tu ultima compra", "Tarjetas de crédito y descuentos"]}
                    colores={["blue", "green", "red"]}
                  />
                </div>
                <div className="ContenedorPrincipal">
                  <div className="ContenedorCategorías">
                    <Genres generos={["Almacén", "Mascotas", "Comidas Listas", "Electrodomésticos", "Limpieza", "Higiene", "Hogar", "Panadería", "Tecnología"]} />
                  </div>
                  <div className="ContenedorOfertas">
                    <Navbar enlaces={["Medios de Pago", "Maps", "Ofertas"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
