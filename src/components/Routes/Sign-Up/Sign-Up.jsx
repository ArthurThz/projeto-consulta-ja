import { Link } from "react-router-dom";

import "./Sign-Up.styles.scss";

import Input from "../../Layout/Input/input";
import Button from "../../Layout/Button/button";

const SignUp = () => {
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
          <form>
            <div className="input-box">
              <Input name="Nome" type="text" />
              <Input name="Sobrenome" type="text" />
            </div>
            <div className="input-box">
              <Input name="CPF" type="text" />
              <Input name="Nascimento" type="date" />
            </div>

            <div className="input-box">
              <Input name="Telefone" type="text" />
              <Input name="Sexo" type="text" />
            </div>
            <Input name="Email" type="text" />
            <Input name="Senha" type="password" />
            <Button type="submit" children="Confirmar" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
