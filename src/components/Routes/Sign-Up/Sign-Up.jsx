import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./Sign-Up.styles.scss";

import Input from "../../Layout/Input/input";
import Button from "../../Layout/Button/button";

import { userContext } from "../../../Context/UserContext";
const SignUp = () => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({});

  const handleOnChange = (event) => {
    let { value, name } = event.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const submitUser = (event) => {
    event.preventDefault();

    if (!newUser.nome) {
      alert("Digite o seu nome");
      return;
    }

    if (newUser.cpf.length != 11) {
      alert("Digite o seu CPF corretamente");
      return;
    }

    if (newUser.senha.length < 6) {
      alert("Sua senha precisa ter no minimo 6 caracteres");
      return;
    }

    setUser(newUser);
    navigate("/login");
  };
  return (
    <div className="container">
      <main>
        <div className="text-area">
          <h1>Seja bem vindo</h1>
          <p>
            Complete o seu cadastro e tenha acesso a todos os nossos serviços.
          </p>
          <span>
            Já tem uma conta? <Link to="/login">Clique Aqui</Link> para fazer
            login.
          </span>
        </div>

        <div className="input-control">
          <form onSubmit={submitUser}>
            <div className="input-box">
              <Input onChange={handleOnChange} name="nome" type="text" />
              <Input onChange={handleOnChange} name="sobrenome" type="text" />
            </div>
            <div className="input-box">
              <Input onChange={handleOnChange} name="cpf" type="text" />
              <Input onChange={handleOnChange} name="senha" type="password" />
            </div>
            <Button type="submit" children="Confirmar" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
