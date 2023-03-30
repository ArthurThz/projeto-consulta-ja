import "./Login.styles.scss";

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { api } from "../../../utils/api";
// Context
import { userContext } from "../../../Context/UserContext";

const Login = () => {
  // Hooks
  const navigate = useNavigate();
  const { setUser } = useContext(userContext);

  //State
  const [userData, setUserData] = useState({});

  // event handlers
  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await api.get(
        `users?name=${userData.userName}&password=${userData.password}`
      );
      if (data.length === 1) {
        setUser(userData.userName);
        navigate("/");
      } else {
        alert("Usuário ou senha inválida");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  return (
    <div className="login-container">
      <div className="left-side"></div>
      <div className="right-side">
        <h1>Login</h1>
        <div className="login">
          <form onSubmit={handleOnSubmit}>
            <div className="control-input">
              <label htmlFor="userName">Nome</label>
              <input
                type="text"
                name="userName"
                placeholder="Digite o seu nome"
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
                <a href="">esqueceu a senha?</a>
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
