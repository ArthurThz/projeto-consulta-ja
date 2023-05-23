import "./Home.styles.scss";

// IMAGES
import equipamentos from "../../../assets/image/equipamentos.png";
import areasImg from "../../../assets/image/areas-diversas.jpg";
import familia from "../../../assets/image/familia.png";

// ICONS
import userSolo from "../../../assets/icon/user-solo.svg";
import userFamily from "../../../assets/icon/user-family.svg";
import pediatria from "../../../assets/icon/pediatria.png";
import clinico from "../../../assets/icon/clinico.svg";
import cardiologia from "../../../assets/icon/cardiologia.svg";
import fisioterapia from "../../../assets/icon/fisio.png";
import oftalmo from "../../../assets/icon/oftalmologia.svg";
import dermatologia from "../../../assets/icon/dermato.png";

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
          <div className="left-content">
            <img src={equipamentos} alt="equipe medica" />
          </div>
          <div className="right-content">
            <h2>Investimos Em Tecnologia</h2>
            <p>
              Nossos consultórios contam com os mais modernos equipamentos,
              fazemos questão de obter os melhores resultados
            </p>
          </div>
        </div>

        <div className="item">
          <div className="left-content">
            <h2>Planos Para Toda Familia</h2>
            <p>Junte a sua familia com a nossa!</p>
            <p>Planos adultos e infantis com os melhores preços</p>
          </div>
          <div className="right-content">
            <img src={familia} alt="imagem" />
          </div>
        </div>

        <div className="item">
          <div className="left-content">
            <img src={areasImg} alt="Equipe de medicos" />
          </div>
          <div className="right-content">
            <h2>Especialidades Diversas</h2>
            <p>Temos colaboradores em todas as especialidades</p>
            <p>Garantindo sempre a máxima qualidade para nossos pacientes</p>
          </div>
        </div>

        <div className="speciality">
          <div className="description">
            <h2>Tratamento de qualidade para você e para quem você ama.</h2>
            <p>
              Nossa prioridade é o seu bem-estar, seu feedback nos motiva mais a
              cada dia. Trabalhamos para ser cada vez melhores.
            </p>
          </div>

          <div className="grid">
            <div className="grid-item">
              <div className="imgItem">
                <img src={pediatria} />
              </div>
              <h3>Pediátria</h3>
              <p>Garantindo a saúde da sua criança</p>
            </div>

            <div className="grid-item">
              <div className="imgItem">
                <img src={clinico} />
              </div>
              <h3>Clínico Geral</h3>
              <p>Garantindo a sua saúde</p>
            </div>

            <div className="grid-item">
              <div className="imgItem">
                <img src={cardiologia} />
              </div>
              <h3>Cardiologia</h3>
              <p>Cuidando do seu coração</p>
            </div>

            <div className="grid-item">
              <div className="imgItem">
                <img src={fisioterapia} />
              </div>
              <h3>Fisioterapia</h3>
              <p>Fortalecendo você ainda mais</p>
            </div>

            <div className="grid-item">
              <div className="imgItem">
                <img src={oftalmo} />
              </div>
              <h3>Oftalmologia</h3>
              <p>Sempre de olho na sua visão</p>
            </div>

            <div className="grid-item">
              <div className="imgItem">
                <img src={dermatologia} />
              </div>
              <h3>Dermatologia</h3>
              <p>Cuidando da sua pele sempre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
