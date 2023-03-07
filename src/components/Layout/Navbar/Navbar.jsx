import "./Navbar.styles.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
// Icons
import heatlhIcon from "../../../assets/icon/health.png";

import { userContext } from "../../../Context/UserContext";
const NavBar = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <nav>
      <div className="nav-left">
        <h1>Consulta já</h1>
        <Link to="/">
          <img src={heatlhIcon} alt="icon consultaja" />
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {user ? (
          <Link className="nav-link" to="/novaconsulta">
            Nova Consulta
          </Link>
        ) : (
          ""
        )}
        {user ? (
          <Link className="nav-link" to="/minhasconsultas">
            Minhas Consultas
          </Link>
        ) : (
          ""
        )}
        {user ? (
          <span className="nav-link" onClick={() => setUser("")}>
            Sair
          </span>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
