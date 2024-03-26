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

function Home ( ){
  return (
    <div className="App">
      <div className="Container">
        <div className="SideBarContainer">
          <div className="SideBar">
            <SideBar />
          </div>
        </div>
        <div>
          <SlideOpinion/>
        </div>
        <div className="MainContainer">
          <div className="advertsingContainer">
            <AdvertisingBar></AdvertisingBar>
          </div>
          <div className="contenedorSession">
            {/* Pasa el estado de autenticación al componente Session */}
            <Session/>
          </div>
          <div className="SearchBarContainer">
            <div><SearchBar/></div>
          </div>
          <div className="CarrouselContainer">
            {/* Agregamos un contenedor adicional para centrar el Carrousel */}
            <div className="CarrouselWrapper">
              <Carrousel />
            </div>
          </div>
          <div className="Content">
            <div className="contenedorDashboard">
              <ContentRow TituloRectangulo={["Promociones", "Tu ultima compra", "Tarjetas de crédito y descuentos"]} 
              colores = {["blue", "green", "red"]}/>
            </div>
            <div className="ContenedorPrincipal">
              <div className="ContenedorCategorías">
                <Genres generos={["Almacén", "Mascotas","Comidas Listas","Electrodomésticos","Limpieza","Higiene","Hogar","Panadería", "Tecnología"]} />
              </div>
              <div className="ContenedorOfertas">
                <Navbar className= "main-container"enlaces={["Medios de Pago", "Maps", "Ofertas"]} />
              </div>
            </div>
          </div>
          <Footer /> {/* Aquí se incluye el footer */}
        </div>
      </div>
    </div>
  );
}

export default Home;
