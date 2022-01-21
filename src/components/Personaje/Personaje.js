import { Link } from "react-router-dom";


const Personaje = (props) => {

    const {cadaUno} = props

    return ( 
            <div className="card m-4" style={{width: "16rem"}}>
            <img className="card-img-top" src={cadaUno.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{cadaUno.name}</h5>
              <p className="card-title">State: {cadaUno.status}</p>
              <p className="card-title">Gender {cadaUno.gender}</p>
              <p className="card-title">Location: {cadaUno.location.name}</p>
              <p className="card-title">Origin: {cadaUno.origin.name}</p>
              <Link to={'/clase39/info/'+cadaUno.id} itemProp={cadaUno}><button className="btn btn-primary">Info</button></Link>
            </div>
          </div>
     );
}
 
export default Personaje;