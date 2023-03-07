import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="message">
        <h1>Seja bem vindo</h1>
        <p>
          Complete o seu cadastro e tenha acesso a todos os nossos serviços.
        </p>
      </div>
      <div className="login">
        <span>
          Já tem uma conta? <Link to="/login">Clique Aqui</Link> para fazer
          login.
        </span>
      </div>
      <div className="inputs-container">
        <div className="user-name">
          <div className="input-control">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder="Digite o seu nome" />
          </div>
          <div className="input-control">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" name="lastName" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
