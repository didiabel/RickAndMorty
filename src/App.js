import './App.css';
import Personajes from './components/personajes/Personajes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {  useEffect} from "react";
import InformacionCharacters from './components/InformacionCharacters';
import Episode from './components/Episode';
import Navbar from './components/Navbar';
import AllEpisodes from './components/allEpisodes/';
import ThisProvider from './store/ContextProvider/ContextProvider'
import Locations from './components/Locations/Locations';
import InformacionLocations from './components/InformacionLocations';


function App() {
  useEffect(() => {
    document.title = "Rick And Morty"
  }, [])
  return (
   <ThisProvider>
    <div className='p-5'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path={'/RickAndMorty/'} element={<Personajes/>}/>
          <Route path={'/RickAndMorty/info/:id'} element={<InformacionCharacters/>}/>
          <Route path={'/RickAndMorty/episode/:nro'} element={<Episode/>}/>
          <Route path={'/RickAndMorty/allEpisodes'} element={<AllEpisodes/>} />
          <Route path={'/RickAndMorty/locations'} element={<Locations/>}/>
          <Route path={"/RickAndMorty/locations/:id"}element={<InformacionLocations/>}/>
        </Routes>
      </Router>
    </div>
    </ThisProvider>
  );
}

export default App;
