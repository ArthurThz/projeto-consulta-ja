import "./Login.styles.scss";

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import { api } from "../../../utils/api";

import { userContext } from "../../../Context/UserContext";
import { isLoggedContext } from "../../../Context/IsLoggedContext";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const { setIsLogged } = useContext(isLoggedContext);

  const [userData, setUserData] = useState({});

  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (user.cpf === !userData.cpf && user.senha === !userData.password) {
      alert("CPF ou senha incorretos, tente novamente");
      return;
    }
    setIsLogged(true);
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="left-side"></div>
      <div className="right-side">
        <h1>Login</h1>
        <div className="login">
          <form onSubmit={handleOnSubmit}>
            <div className="control-input">
              <label htmlFor="userCPF">CPF</label>
              <input
                type="text"
                name="userCPF"
                placeholder="Digite o seu CPF"
                onChange={handleOnChangeInput}
              />
            </div>

            <div className="control-input">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                placeholder="Digite a sua senha"
                onChange={handleOnChangeInput}
              />
            </div>

            <div className="control-input-options">
              <section>
                <input type="checkbox" name="rememberUser" />
                <label htmlFor="rememberUser">Lembrar de mim</label>
              </section>

              <section>
                <a href="" className="forgot-password">
                  esqueceu a senha?
                </a>
              </section>
            </div>

            <input className="button" type="submit" value="Entrar" />

            <div className="sign-up">
              <span>
                Não tem uma conta ainda? <Link to="/cadastro">Cadastre-se</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
