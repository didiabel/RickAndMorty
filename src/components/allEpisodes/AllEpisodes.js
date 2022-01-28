import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BarWave from "react-cssfx-loading/lib/BarWave";
import { Context } from "../../store/ContextProvider/ContextProvider";
import CardsAllEpisodes from "../CardsAllEpisodes";

const AllEpisodes = () => {
    const {search} = useContext(Context)

    const [pagInicioNro, setPagInicioNro] = useState(1);
    const [dataToShow, setDataToShow] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const HandleInicioSeeMore = () => {
      seeMore(
        "https://rickandmortyapi.com/api/episode/?page=" + (pagInicioNro + 1)
      );
      setPagInicioNro(pagInicioNro + 1);
    };
  
    useEffect(() => {
      seeMore("https://rickandmortyapi.com/api/episode/?page=" + pagInicioNro);
      //alert(URL);
    }, []);
  
    const seeMore = async (URL) => {
      let resp = await axios.get(URL);
      if (dataToShow.length > 0) {
        for (let i = 0; i < resp.data.results.length; i++) {
          setDataToShow((oldArray) => [...oldArray, resp.data.results[i]]);
        }
      } else {
        setDataToShow(resp.data.results);
      }
      setLoading(false);
    };
  return (
    <div className="border">
        <h1 className="text-center border-bottom m-4 p-4">Episodios</h1>
      {loading ? (
        <div className="mt-5 mb-5">
          <div className="d-flex justify-content-around align-content-center">
            <BarWave />
          </div>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-between">
          {dataToShow.filter(val=>{
                if (search == '') {
                    return dataToShow
                }else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map((episode) => (
            <CardsAllEpisodes key={episode.id} episode={{ ...episode }} />
          ))}
        </div>
      )}
      <div className="d-flex justify-content-around">
        <button onClick={() => HandleInicioSeeMore()} className="btn btn-success">See More</button>
      </div>
    </div>
  );
};

export default AllEpisodes;
