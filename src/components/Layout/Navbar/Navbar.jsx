import "./Navbar.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
// Icons
import navbarIcon from "../../../assets/image/navbar-icon.svg";
import { isLoggedContext } from "../../../Context/IsLoggedContext";
const NavBar = () => {
  const navigate = useNavigate();

  const { isLogged, setIsLogged } = useContext(isLoggedContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
  };

  const closeMenu = () => setMenuIsOpen(false);
  return (
    <nav>
      <div className="nav-left">
        <h1>Consulta já</h1>
        <Link to="/">
          <img src={navbarIcon} alt="icon consultaja" />
        </Link>
      </div>
      <div className="nav-right-mobile">
        <div className="bars" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="nav-right-desktop">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {isLogged === true ? (
          <Link className="nav-link" to="/novaconsulta">
            Nova Consulta
          </Link>
        ) : (
          ""
        )}
        {isLogged === true ? (
          <Link className="nav-link" to="/minhasconsultas">
            Minhas Consultas
          </Link>
        ) : (
          ""
        )}
        {isLogged === true ? (
          <span
            className="nav-link"
            onClick={() => {
              setIsLogged(false);
              navigate("/login");
            }}
          >
            Sair
          </span>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
      </div>
      {menuIsOpen === true ? (
        <div className="menu">
          <div className="bars" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="links">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            {isLogged === true ? (
              <Link className="nav-link" to="/novaconsulta" onClick={closeMenu}>
                Nova Consulta
              </Link>
            ) : (
              ""
            )}
            {isLogged === true ? (
              <Link
                className="nav-link"
                to="/minhasconsultas"
                onClick={closeMenu}
              >
                Minhas Consultas
              </Link>
            ) : (
              ""
            )}
            {isLogged === true ? (
              <span
                className="nav-link"
                onClick={() => {
                  setIsLogged(false);
                  navigate("/login");
                  closeMenu;
                }}
              >
                Sair
              </span>
            ) : (
              <Link className="nav-link" to="/login" onClick={closeMenu}>
                Login
              </Link>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;
