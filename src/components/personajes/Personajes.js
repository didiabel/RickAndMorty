import { BarWave } from "react-cssfx-loading/lib";
import { GetApi } from "../../GlobalHooks/HTTP";
import Personaje from "../Personaje";


const Personajes = () => {

    const [data, loading] = GetApi('https://rickandmortyapi.com/api/character')

    // const[data, setData] = useState([])

    // useEffect(()=>{
    //     axios.get('https://rickandmortyapi.com/api/character')
    //     .then(resp => (
    //         setData(resp.data.results)
    //     ))
    // },[])

    return ( 
        <div className="container border-end border-bottom rounded border-5 bg-light ">
            <h1 className="text-center border-bottom m-4 p-4">Inicio</h1>
        {loading ?
        <div className="mt-5">
        <div className="d-flex justify-content-around align-content-center">
        <BarWave />
        </div>
        </div>
        :
        <div className="d-flex flex-wrap">
        
        {data.results.map(cadaUno => (
            <Personaje key={cadaUno.id} cadaUno={{...cadaUno}}/>
        ))}
        </div >    
        }
        
        </div>
     );
}
 
export default Personajes;