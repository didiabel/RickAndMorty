import { useContext, useEffect, useState } from "react";
import { BarWave } from "react-cssfx-loading/lib";
import { Context } from "../../store/ContextProvider/ContextProvider";
import axios from "axios";
import Personaje from "../Personaje";

const Personajes = () => {
    const {search} = useContext(Context)
  const [pagInicioNro, setPagInicioNro] = useState(1);
  const [dataToShow, setDataToShow] = useState([]);
  const [loading, setLoading] = useState(false);

  const HandleInicioSeeMore = () => {
    seeMore(
      "https://rickandmortyapi.com/api/character/?page=" + (pagInicioNro + 1)
    );
    setPagInicioNro(pagInicioNro + 1);
  };

  useEffect(() => {
    seeMore("https://rickandmortyapi.com/api/character/?page=" + pagInicioNro);
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
    <div className="container border-end border-bottom rounded border-5 bg-light ">
      <h1 className="text-center border-bottom m-4 p-4">Personajes</h1>
      {loading ? (
        <div className="mt-5">
          <div className="d-flex justify-content-around align-content-center">
            <BarWave />
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex flex-wrap justify-content-center">
            {dataToShow ? (
              dataToShow.filter(val=>{
                if (search == '') {
                    return dataToShow
                }else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map(cadaUno => (
                <Personaje key={cadaUno.id} cadaUno={{ ...cadaUno }} />
              ))
            ) : (
              <div className="mt-5">
                <div className="d-flex justify-content-around align-content-center">
                  <BarWave />
                </div>
              </div>
            )}
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            <button
              onClick={() => HandleInicioSeeMore()}
              className="btn btn-success m-3"
            >
              See More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Personajes;
