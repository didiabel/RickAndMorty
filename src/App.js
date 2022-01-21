import './App.css';
import Personajes from './components/personajes/Personajes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Informacion from './components/Informacion';
import Episode from './components/Episode';
import Navbar from './components/Navbar';
import AllEpisodes from './components/allEpisodes/';
import ThisProvider from './store/ContextProvider/ContextProvider'

function App() {
  return (
   <ThisProvider>
    <div className='p-5'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path={'/clase39'} element={<Personajes/>}/>
          <Route path={'/clase39/info/:id'} element={<Informacion/>}/>
          <Route path={'/clase39/episode/:nro'} element={<Episode/>}/>
          <Route path={'/clase39/allEpisodes'} element={<AllEpisodes/>} />
        </Routes>
      </Router>
    </div>
    </ThisProvider>
  );
}

export default App;
