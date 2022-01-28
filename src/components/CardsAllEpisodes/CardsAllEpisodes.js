import { Link } from "react-router-dom";

const CardsAllEpisodes = (props) => {
  const { episode } = props;

  return (
    <div
      className="card text-center border-5 border-dark rounded m-4 mt-4 "
      style={{ width: "16rem" }}
    >
      <div className="card-header bg-success">
        <h4 className="text-white">{episode.episode}</h4>
      </div>
      <div className="card-body bg-secondary">
        <h5 className="card-title">{episode.name}</h5>
        <Link
          to={"/RickAndMorty/episode/" + episode.id}
          key={episode.id}
          className="btn btn-primary mt-2"
        >
          Ver Episodio
        </Link>
      </div>
      <div className="card-footer text-muted bg-success">
        <h4 className="text-white">{episode.air_date}</h4>
      </div>
    </div>
  );
};

export default CardsAllEpisodes;
