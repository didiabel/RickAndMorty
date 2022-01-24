import { useContext, useEffect, useState } from "react";
import { BarWave } from "react-cssfx-loading/lib";
import { GetApi } from "../../GlobalHooks/HTTP";
import { Context } from "../../store/ContextProvider/ContextProvider";
import Personaje from "../Personaje";

const Personajes = () => {
  const [data, loading] = GetApi("https://rickandmortyapi.com/api/character");
  const [pagInicioNro, setPagInicioNro] = useState(1);
  const [dataToShow, setDataToShow] = useState([]);

  const HandleInicioSeeMore = () => {
    setPagInicioNro(pagInicioNro + 1);

    seeMore();
  };

  // const[data, setData] = useState([])

  // useEffect(()=>{
  //     axios.get('https://rickandmortyapi.com/api/character')
  //     .then(resp => (
  //         setData(resp.data.results)
  //     ))
  // },[])

const seeMore = () => {
    const [data, loading] = GetApi(
    "https://rickandmortyapi.com/api/character/?page=" + pagInicioNro
  );
  setDataToShow([...dataToShow, data])
};

  return (
    <div className="container border-end border-bottom rounded border-5 bg-light ">
      <h1 className="text-center border-bottom m-4 p-4">Inicio</h1>
      {loading ? (
        <div className="mt-5">
          <div className="d-flex justify-content-around align-content-center">
            <BarWave />
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex flex-wrap justify-content-center">
            {!dataToShow == [] ?
            data.results.map((cadaUno) => (
                <Personaje key={cadaUno.id} cadaUno={{ ...cadaUno }} />
              ))
            :
            dataToShow.results.map((cadaUno) => (
              <Personaje key={cadaUno.id} cadaUno={{ ...cadaUno }} />
            ))}
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
