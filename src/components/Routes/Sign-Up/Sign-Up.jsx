import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Sign-Up.styles.scss";

import { apiRoute } from "../../../services/api";
import Input from "../../Layout/Input/input";
import Button from "../../Layout/Button/button";

const SignUp = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState(null);

  const handleInputOnChange = (event) => {
    let { value, name } = event.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const submitUser = async (event) => {
    event.preventDefault();
    if (!newUser) {
      alert("Os campos precisam ser preenchidos!");
      return;
    }

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

    apiRoute
      .post("/users", newUser)
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        setUser(null);
        navigate("/login");
      })
      .catch((err) => {
        alert(
          "Não foi possivel cadastrar o usuário verifique os dados e tente novamente"
        );
        console.error("error: " + err);
        return;
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
              <Input onChange={handleInputOnChange} name="nome" type="text" />
              <Input
                onChange={handleInputOnChange}
                name="sobrenome"
                type="text"
              />
            </div>
            <div className="input-box">
              <Input onChange={handleInputOnChange} name="cpf" type="text" />
              <Input
                onChange={handleInputOnChange}
                name="data_nasc"
                type="date"
              />
            </div>

            <div className="input-box">
              <Input
                onChange={handleInputOnChange}
                name="telefone"
                type="text"
              />
              <Input onChange={handleInputOnChange} name="sexo" type="text" />
            </div>
            <div className="input-box">
              <Input onChange={handleInputOnChange} name="email" type="text" />
              <Input
                onChange={handleInputOnChange}
                name="senha"
                type="password"
              />
            </div>
            <Button label="Confirmar" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
