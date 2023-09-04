import "./Login.styles.scss";

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { userContext } from "../../../Context/UserContext";
import { isLoggedContext } from "../../../Context/IsLoggedContext";
import { apiRoute } from "../../../services/api";
import { Container, Form, FormContainer } from "./styles";

import Input from "../../Layout/Input/input";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(userContext);
  const { setIsLogged } = useContext(isLoggedContext);

  const [inputData, setInputData] = useState({});

  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await apiRoute.get(
        `/users?cpf=eq.${inputData.cpf}&select=*&senha=eq.${inputData.senha}&select=*`
      );

      if (data.length !== 1) {
        alert("Usuário não encontrado");
        return;
      }
      setUser(data[0]);
      setIsLogged(true);
      navigate("/");
    } catch {
      alert("Houve um erro, tente novamente");
      return;
    }
  };

  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>
          <Form onSubmit={handleOnSubmit}>
            <Input type="text" name="cpf" onChange={handleOnChangeInput} />
            <Input
              type="password"
              name="senha"
              onChange={handleOnChangeInput}
            />

            <div className="control-input-options">
              <section>
                <input type="checkbox" name="rememberUser" id="rememberUser" />
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
          </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
