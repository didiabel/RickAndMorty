import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetApi } from "../../GlobalHooks/HTTP";
import Char from "../char/char";
import BarWave from "react-cssfx-loading/lib/BarWave";


const Episode = () => {
    const {nro} = useParams()
    const [characters, setCharacters] = useState(true)
    const [data, loading] = GetApi('https://rickandmortyapi.com/api/episode/'+nro)

    const getEpisodes =()=>{
        setCharacters(true)
    }
    const hideEpisodes =()=>{
        setCharacters(false)
    }
    return (
        <div className="container border-end border-5 rounded bg-light">
        {loading ?
        <div className="mt-5">
        <div className="d-flex justify-content-around align-content-center">
        <BarWave />
        </div>
        </div>
            :
        <div className="container">
            <div className="d-flex justify-content-around">
            <div className="border border-5 border-success rounded mt-5 p-2 bg-success">
                <h1 className="text-center">Episodio {data.episode}: </h1>
            <h2 className="text-center">{data.name}</h2>
             <h3 className="text-center">{data.air_date}</h3>
             </div>
                 </div>
                 <div className="d-flex justify-content-around mt-5">
                 <Link to={'/clase39/'} ><button className="btn btn-primary">Volver</button></Link>
                 <button className="btn btn-success h-25" onClick={()=>getEpisodes()}>Characters</button>
                 <button className={characters ? ' btn btn-danger' : 'd-none'} onClick={()=>hideEpisodes()}> Esconder</button>
                 </div>
                 <div className={characters? "container d-flex flex-wrap  border mt-4" : 'd-none'}>
        
             {data.characters.map(char => {
                 return(
                 <Char key={char} Url={char}/>)
             })}
            
            
             </div>
         
        </div>
        }
        </div>
     );
}
 
export default Episode;