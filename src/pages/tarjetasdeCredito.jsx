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

function Tarjetas ( ){
  return (
    <div>
    <header>
        <AdvertisingBar/><AdvertisingBar/>
        <Session/><Session/>
        <SearchBar/><SearchBar/>
        <Carrousel/><Carrousel/>
    </header>
    <body>
        <Navbar/><Navbar/>
        <div className="ContenedorOfertas10%">

        </div>
        <div className="ContenedorOfertas2X1">

        </div>
    </body>
    <footer>
        <Footer></Footer>
    </footer>
    </div>
  );
}

export default Tarjetas;
