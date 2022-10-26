import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search } from "./Search";

const pages = [
  {
    name: "Marvel",
    path: "/marvel",
  },
  {
    name: "DC",
    path: "/dc",
  },
];

export const NavBar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login", {
      //! replace evita que la persona pueda volver a la página anterior (borra el historial)
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand mx-auto mx-lg-2 order-1">
          Heroes
        </Link>
        <div
          className="collapse navbar-collapse order-3 order-lg-2"
          id="navbarToggler"
        >
          <div className="d-lg-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {pages.map((page) => (
                <li key={page.name} className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    aria-current="page"
                    to={page.path}
                    end
                  >
                    {page.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Search />
          </div>
        </div>
        <div className="dropdown dropstart order-2 order-lg-3">
          <button
            className="btn btn-dark dropdown-toggle "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="rounded-circle bg-primary p-1">JC</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="btn btn-link dropdown-item "
                onClick={() => onLogout()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
