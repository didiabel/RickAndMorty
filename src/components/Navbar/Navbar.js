import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/ContextProvider/ContextProvider";

const Navbar = () => {
  const { search, setSearch } = useContext(Context);
  console.log(search);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex ">
        <div className="container-fluid">
          <Link
            to={"/RickAndMorty/"}
            className="navbar-brand text-white m-3"
            href="#"
          >
            Personajes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to={"/RickAndMorty/allEpisodes"}
                  className="nav-link text-white"
                  href="#"
                >
                  Episodios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/RickAndMorty/locations"}
                  className="nav-link text-white"
                  href="#"
                >
                  Locations
                </Link>
              </li>
            </ul>

            <form className="d-flex ">
              <input
                className="form-control me-2"
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
