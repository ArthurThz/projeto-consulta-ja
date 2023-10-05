import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { userContext } from "../../../Context/UserContext";
import { isLoggedContext } from "../../../Context/IsLoggedContext";
import { apiRoute } from "../../../services/api";
import { Container, Form, FormContainer, ImageContainer, Row } from "./styles";
import Button from "../../Layout/Button/button";
import Input from "../../Layout/Input/input";

import loginImage from "../../../assets/image/login_image2.jpg";

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
        `/users?cpf=eq.${inputData.CPF}&select=*&senha=eq.${inputData.Senha}&select=*`
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
      <ImageContainer>
        <img src={loginImage} alt="imagem de login" />
      </ImageContainer>
      <FormContainer>
        <h1>Entrar</h1>

        <Form onSubmit={handleOnSubmit}>
          <Input type="text" name="CPF" onChange={handleOnChangeInput} />
          <Input type="password" name="Senha" onChange={handleOnChangeInput} />
          <Row>
            <input type="checkbox" name="rememberUser" id="rememberUser" />
            <label htmlFor="rememberUser">Lembrar de mim</label>
          </Row>

          <Row>
            <a href="" className="forgot-password">
              esqueceu a senha?
            </a>
          </Row>

          <Button children="Confirmar" onClick={handleOnSubmit} type="submit" />

          <Row>
            <span>
              Não tem uma conta ainda? <Link to="/cadastro">Cadastre-se</Link>
            </span>
          </Row>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
