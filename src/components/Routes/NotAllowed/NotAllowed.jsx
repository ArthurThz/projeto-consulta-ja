import "./NotAllowed.styles.scss";
import { useNavigate } from "react-router-dom";

import unauthorizedImg from "../../../assets/image/unauthorized.svg";
const NotAllowed = () => {
  const navigate = useNavigate();
  return (
    <div className="not-allowed-container">
      <div className="hero">
        <h1>Atenção!!</h1>

        <p>
          Você não tem permissão para acessar esta área, faça login para
          continuar.
        </p>
        <button onClick={() => navigate("/login")}>Fazer Login</button>
      </div>

      <img src={unauthorizedImg} alt="not allowed image" />
    </div>
  );
};

export default NotAllowed;
