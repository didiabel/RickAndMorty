import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { GetApi } from "../../GlobalHooks/HTTP";
import { Link } from "react-router-dom";
import { BarWave } from "react-cssfx-loading/lib";


const Informacion = () => {
    
    const {id} = useParams()
    const [episodes, setEpisodes] = useState(true)
    const [data, loading] = GetApi('https://rickandmortyapi.com/api/location/'+id)


    
    const getEpisodes =()=>{
        setEpisodes(true)
    }
    const hideEpisodes =()=>{
        setEpisodes(false)
    }
    console.log(data);

    return ( 
         <div className="container border-end border-5 border-bottom rounded bg-light">
         <h1 className="text-center">Informacion del Lugar:</h1>
         {loading ?
         <div className="mt-5">
         <div className="d-flex justify-content-around align-content-center">
         <BarWave />
         </div>
         </div>
         :
         <div className="container">
             <h2 className="text-center text-success">Planeta: {data.name}</h2>
             <div className="d-flex justify-content-around">
             </div>
             <h5 className="text-center">Dimension: {data.dimension}</h5>

             <div className="d-flex flex-wrap justify-content-between">
                 <button className="btn btn-success h-25" onClick={()=>getEpisodes()}>Characters</button>
                 <button className={episodes ? ' btn btn-danger' : 'd-none'} onClick={()=>hideEpisodes()}> Esconder</button>
                 </div>
                 
                 <div className="d-flex flex-wrap justify-content-around mt-5">
         {data.residents.map(ep => {
          let nro = ep.replace('https://rickandmortyapi.com/api/character/','')
          return(
              <Link to={'/RickAndMorty/info/'+nro} key={ep}>
              <button  className={episodes ? 'm-4 btn btn-warning' : 'd-none'}>{'Character: '+ nro}</button>
              </Link>)
              
          })}
          
          </div>
          </div>
         }

         </div>
     );
}
 
export default  Informacion;