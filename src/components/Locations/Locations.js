import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BarWave from "react-cssfx-loading/lib/BarWave";
import { Link } from "react-router-dom";
import { GetApi } from "../../GlobalHooks/HTTP";
import { Context } from "../../store/ContextProvider/ContextProvider";
import CardsAllEpisodes from "../CardsAllEpisodes";
import CardsLocations from "../CardsLocations";

const Locations = () => {
    const {search, setSearch} = useContext(Context)

    const [pagInicioNro, setPagInicioNro] = useState(1);
    const [dataToShow, setDataToShow] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const HandleInicioSeeMore = () => {
      seeMore(
        "https://rickandmortyapi.com/api/location/?page=" + (pagInicioNro + 1)
      );
      setPagInicioNro(pagInicioNro + 1);
    };
  
    useEffect(() => {
      seeMore("https://rickandmortyapi.com/api/location/?page=" + pagInicioNro);
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
      <h1 className="text-center border-bottom m-4 p-4">Locations</h1>
      {loading ? (
        <div className="mt-5">
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
            }).map((Locations) => (
            <CardsLocations key={Locations.id} Locations={{ ...Locations }} />
          ))}
        </div>
      )}
      <div>
        <button onClick={() => HandleInicioSeeMore()} className="btn btn-success">See More</button>
      </div>
    </div>
  );
};

export default Locations;
