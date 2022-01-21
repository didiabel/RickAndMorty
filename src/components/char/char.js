import { BarWave } from "react-cssfx-loading/lib";
import { Link } from "react-router-dom";
import { GetApi } from "../../GlobalHooks/HTTP";

const Char = (props) => {
    const {Url} = props
    const [data, loading] = GetApi(Url)
    return ( 
        <div className="">
        {loading?
        <div className="mt-5">
        <div className="d-flex justify-content-around align-content-center">
        <BarWave />
        </div>
        </div>
        :
        <div className="card m-4" style={{width: "16rem"}}>
            <img className="card-img-top" src={data.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-title">State: {data.status}</p>
              <p className="card-title">Gender {data.gender}</p>
              <p className="card-title">Location: {data.location.name}</p>
              <p className="card-title">Origin: {data.origin.name}</p>
              <Link to={'/clase39/info/'+data.id} itemProp={data}><button className="btn btn-primary">Info</button></Link>
            </div>
          </div>
          }
          </div>
     );
}
 
export default Char;