import { Link } from "react-router-dom";

const CardsAllEpisodes = (props) => {

    const {episode} = props


    return ( 
        <div className="card text-center m-2" style={{width: "16rem"}}> 
  <div className="card-header">
    <h4>{episode.episode}</h4>
  </div>
  <div className="card-body">
    <h5 className="card-title">{episode.name}</h5>
    <p className="card-text">{episode.created}</p>
    <Link to={'/clase39/episode/'+episode.id} className="btn btn-primary">Ver Episodio</Link>
  </div>
  <div className="card-footer text-muted">
    <h4>{episode.air_date}</h4>
  </div>
</div>
     );
}
 
export default CardsAllEpisodes;