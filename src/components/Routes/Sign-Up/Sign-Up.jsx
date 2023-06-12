import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Sign-Up.styles.scss";

import Input from "../../Layout/Input/input";
import Button from "../../Layout/Button/button";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleOnChange = (event) => {
    let { value, name } = event.target;

    setUser({ ...user, [name]: value });
  };

  const submitUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/consulta-ja-backend/cadastrar-usuario.php", user)
      .then((res) => {
        const { error, message } = res.data;

        if (error === true) {
          alert(message);
          return;
        }
        alert("usuário cadastrado com sucesso!");
      })
      .catch(() => {
        alert("Verifique os dados e tente novamente.");
      })
      .finally(() => {
        navigate("/login");
      });
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
              <Input onChange={handleOnChange} name="Nome" type="text" />
              <Input onChange={handleOnChange} name="Sobrenome" type="text" />
            </div>
            <div className="input-box">
              <Input onChange={handleOnChange} name="cpf" type="text" />
              <Input onChange={handleOnChange} name="Nascimento" type="date" />
            </div>

            <div className="input-box">
              <Input onChange={handleOnChange} name="Telefone" type="text" />
              <Input onChange={handleOnChange} name="Sexo" type="text" />
            </div>
            <div className="input-box">
              <Input onChange={handleOnChange} name="Email" type="text" />
              <Input onChange={handleOnChange} name="Senha" type="password" />
            </div>
            <Button type="submit" children="Confirmar" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
