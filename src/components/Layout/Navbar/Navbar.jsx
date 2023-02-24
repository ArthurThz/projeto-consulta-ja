import "./Navbar.styles.scss";

import { Link } from "react-router-dom";
import userIcon from "../../../assets/icon/user-icon.png";
import heatlhIcon from "../../../assets/icon/health.png";
const NavBar = () => {
  const user = false;
  return (
    <nav>
      <div className="nav-left">
        <h1>Consulta já</h1>
        <Link to="/">
          <img src={heatlhIcon} alt="icon consultaja" />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        {user === true ? <Link to="/novaconsulta">Nova Consulta</Link> : ""}
        {user === true ? (
          <Link to="/minhasconsultas">Minhas Consultas</Link>
        ) : (
          ""
        )}

        <div className="user">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
