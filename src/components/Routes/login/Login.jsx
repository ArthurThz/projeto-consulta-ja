import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { userContext } from "../../../Context/UserContext";
import { isLoggedContext } from "../../../Context/IsLoggedContext";
import { apiRoute } from "../../../services/api";
import { Container, Title, FormContainer, Formulario } from "./styles";
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
      <Title>Entrar</Title>
      <FormContainer>
        <Formulario onSubmit={handleOnSubmit}>
          <Input name="CPF" onChange={handleOnChangeInput} type="text" />
          <Input name="Senha" type="password" onChange={handleOnChangeInput} />
          <Button label="Entrar" type="submit" />
        </Formulario>
      </FormContainer>
    </Container>
  );
};

export default Login;
