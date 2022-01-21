import BarWave from "react-cssfx-loading/lib/BarWave";
import { Link } from "react-router-dom";
import { GetApi } from "../../GlobalHooks/HTTP";
import CardsAllEpisodes from "../CardsAllEpisodes";

const allEpisodes = () => {

    
    const [data, loading] = GetApi('https://rickandmortyapi.com/api/episode/')


    return ( 
        <div className="border">
        {loading ?
        <div className="mt-5">
        <div className="d-flex justify-content-around align-content-center">
        <BarWave />
        </div>
        </div>
        :
        <div className="d-flex flex-wrap justify-content-between">
        {data.results.map(episode => (
            <CardsAllEpisodes key={episode.id} episode={{...episode}}/>
        ))}
        </div>
        }
        </div>
     );
}
 
export default allEpisodes;