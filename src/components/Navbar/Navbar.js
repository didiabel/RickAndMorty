import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/ContextProvider/ContextProvider";

const Navbar = () => {
  const { search, setSearch } = useContext(Context);
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-dark ">
        <div className="container-fluid">
          <Link
            to={"/RickAndMorty/"}
            className="navbar-brand text-white m-3"
            href="#"
          >
            Personajes
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <Link
                  to={"/RickAndMorty/allEpisodes"}
                  className="nav-link text-white"
                  href="#"
                >
              <li className="nav-item">
                  Episodios
              </li>
                </Link>
                <Link
                  to={"/RickAndMorty/locations"}
                  className="nav-link text-white"
                  href="#"
                >
              <li className="nav-item">
                  Locations
              </li>
                </Link>
            </ul>

            <form className="d-flex ">
              <input
                className="form-control"
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-success my-2 my-sm-0 text-white m-3"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
