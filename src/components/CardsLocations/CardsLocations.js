import { Link } from "react-router-dom";

const CardsAllEpisodes = (props) => {
  const { Locations } = props;

  return (
    <div
      className="card text-center border-5 border-dark rounded m-4 mt-4 "
      style={{ width: "16rem" }}
    >
      <div className="card-header bg-success">
        <h4 className="text-white">{Locations.type}</h4>
      </div>
      <div className="card-body bg-secondary">
        <h5 className="card-title">{Locations.name}</h5>
        <Link
          to={"/RickAndMorty/locations/" + Locations.id}
          className="btn btn-primary mt-2"
        >
          Ver Location
        </Link>
      </div>
      <div className="card-footer text-muted bg-success">
        <h4 className="text-white">{Locations.dimension}</h4>
      </div>
    </div>
  );
};

export default CardsAllEpisodes;
