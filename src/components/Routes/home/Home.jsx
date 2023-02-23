import "./Home.styles.scss";

// IMAGES
import equipamentos from "../../../assets/image/equipamentos.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="presentation">
        <div className="text">
          <h2>Garantimos os melhores e mais qualificados serviços de saúde</h2>
          <p>
            Temos um compromisso com nossos clientes, nossa prioridade é
            proporcianar uma experiência rápida e eficaz para suas consultas.
          </p>
          <button>Conheça nossos médicos</button>
        </div>
        <div className="data">
          <div className="item">
            <div className="left">
              <h3>500+</h3>
              <p>Pacientes todos os dias</p>
            </div>
            <div className="center">
              <h3>10+</h3>
              <p>Anos de experiência</p>
            </div>
            <div className="right">
              <h3>350+</h3>
              <p>Diagnósticos Confirmados</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="item">
          <div className="left_content">
            <img src={equipamentos} alt="equipe medica" />
          </div>
          <div className="right_content">
            <h2>Investimos Em Tecnologia</h2>
            <p>
              Nossos consultórios contam com os mais modernos equipamentos,
              fazemos questão de obter os melhores resultados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
