import "./Login.styles.scss";

import { Link } from "react-router-dom";

// Icons
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-side"></div>
      <div className="right-side">
        <h1>Login</h1>
        <div className="login">
          <form>
            <div className="control-input">
              <label htmlFor="userName">CPF</label>
              <input
                type="text"
                name="userName"
                placeholder="Digite o seu CPF"
              />
            </div>

            <div className="control-input">
              <label htmlFor="userPassword">Senha</label>
              <input
                type="password"
                name="userPassword"
                placeholder="Digite a sua senha"
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

            <div className="login-social-media">
              <span>Entrar com</span>
              <section>
                <a href="">
                  <FaFacebook />
                </a>
                <a href="">
                  <FaGoogle />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
              </section>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
