import "./Login.styles.scss";

import { Link } from "react-router-dom";
import { useState, useContext } from "react";

// Icons
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

// Context
import { userContext } from "../../../Context/UserContext";

import { loginCall } from "../../../utils/login.utils";

const Login = () => {
  const { user, setUser, userData } = useContext(userContext);

  // States
  const [Users, setUsers] = useState("");
  const [Password, setPassword] = useState("");

  // event handlers
  const userEventHandler = (event) => {
    let value = event.target.value;
    setUsers(value);
  };

  const passwordEventHandler = (event) => {
    let value = event.target.value;
    setPassword(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  const fetchLogin = () => {
    loginCall(Users, Password)
      .then(() => {
        setUser(Users);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="login-container">
      <div className="left-side"></div>
      <div className="right-side">
        <h1>Login</h1>
        <div className="login">
          <form onSubmit={handleOnSubmit}>
            <div className="control-input">
              <label htmlFor="userName">CPF</label>
              <input
                type="text"
                name="userName"
                placeholder="Digite o seu CPF"
                onChange={userEventHandler}
              />
            </div>

            <div className="control-input">
              <label htmlFor="userPassword">Senha</label>
              <input
                type="password"
                name="userPassword"
                placeholder="Digite a sua senha"
                onChange={passwordEventHandler}
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

            <input
              className="button"
              type="submit"
              value="Entrar"
              onClick={fetchLogin}
              disabled={Users === "" || Password.length < 6}
            />

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
