import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { GetApi } from "../../GlobalHooks/HTTP";
import { Link } from "react-router-dom";
import { BarWave } from "react-cssfx-loading/lib";


const Informacion = () => {
    
    const {id} = useParams()
    const [episodes, setEpisodes] = useState(false)
    const [data, loading] = GetApi('https://rickandmortyapi.com/api/character/'+id)


    
    const getEpisodes =()=>{
        setEpisodes(true)
    }
    const hideEpisodes =()=>{
        setEpisodes(false)
    }
    console.log(data);

    return ( 
         <div className="container border-end border-5 border-bottom rounded bg-light">
         <h1 className="text-center">Informacion del personaje:</h1>
         {loading ?
         <div className="mt-5">
         <div className="d-flex justify-content-around align-content-center">
         <BarWave />
         </div>
         </div>
         :
         <div className="container">
             <h2 className="text-center text-success">{data.name}</h2>
             <div className="d-flex justify-content-around">
             <img className="card-img-top w-25 " src={data.image} alt="Card image cap"/>
             </div>
             <h3 className={data.status == "Alive" ? "text-center text-success" : "text-center text-danger"}>{data.status}</h3>
             <h4 className="text-center" style={data.gender == "Male" ? {color: "#425df5"} : {color: "#a300a0"}}>{data.gender}</h4>
             <h5 className="text-center">{data.location.name}</h5>

             <div className="d-flex flex-wrap justify-content-between">
                 <Link to={'/clase39/'}><button className="btn btn-primary">Volver</button></Link>
                 <button className="btn btn-success h-25" onClick={()=>getEpisodes()}>Episodios</button>
                 <button className={episodes ? ' btn btn-danger' : 'd-none'} onClick={()=>hideEpisodes()}> Esconder</button>
                 </div>
                 
                 <div className="d-flex flex-wrap justify-content-around mt-5">
         {data.episode.map(ep => {
          let nro = ep.replace('https://rickandmortyapi.com/api/episode/','')
          return(
              <Link to={'/clase39/episode/'+nro} key={nro}>
              <button key={nro} className={episodes ? 'm-4 btn btn-warning' : 'd-none'}>{'Episode: '+ nro}</button>
              </Link>)
              
          })}
          
          </div>
          </div>
         }

         </div>
     );
}
 
export default  Informacion;