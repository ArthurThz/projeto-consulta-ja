import { useNavigate } from "react-router-dom";

// IMAGES
import equipamentos from "../../../assets/image/equipamentos.png";
import areasImg from "../../../assets/image/areas-diversas.jpg";
import familia from "../../../assets/image/familia.png";
import doctorsImg from "../../../assets/image/doctors.svg";

// ICONS
import pediatria from "../../../assets/icon/pediatria.png";
import clinico from "../../../assets/icon/clinico.svg";
import cardiologia from "../../../assets/icon/cardiologia.svg";
import fisioterapia from "../../../assets/icon/fisio.png";
import oftalmo from "../../../assets/icon/oftalmologia.svg";
import dermatologia from "../../../assets/icon/dermato.png";

//Styles
import {
  Container,
  DataItem,
  Grid,
  GridItem,
  Hero,
  ImageContainer,
  Message,
  OurData,
  Presentation,
  SpecialtyContainer,
  Text,
  TextContainer,
  Title,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {/* Initial View */}
      <Presentation>
        <div>
          <h2>Oferecemos serviços de qualidade.</h2>
          <p>
            Temos um compromisso com nossos clientes, nossa prioridade é
            proporcianar uma experiência rápida e eficaz para suas consultas.
          </p>
          <p>Cadastre-se para ter acesso aos nossos serviços.</p>
          <button onClick={() => navigate("/cadastro")}>Fazer Cadastro</button>
        </div>
        <img src={doctorsImg} alt="doctors icon" />
      </Presentation>
      {/* Data infos */}
      <OurData>
        <DataItem>
          <h3>500+</h3>
          <p>Pacientes todos os dias</p>
        </DataItem>
        <DataItem className="middle">
          <h3>10+</h3>
          <p>Anos de experiência</p>
        </DataItem>
        <DataItem>
          <h3>350+</h3>
          <p>Diagnósticos confirmados</p>
        </DataItem>
      </OurData>
      {/* Heros */}
      <Hero>
        <ImageContainer src={equipamentos} />
        <TextContainer>
          <Title>Investimos em Tecnologia</Title>
          <Text>
            Nossos consultórios contam com os mais modernos equipamentos,
            fazemos questão de obter os melhores resultados
          </Text>
        </TextContainer>
      </Hero>

      <Hero reverse>
        <ImageContainer src={familia} />
        <TextContainer>
          <Title>Planos Para Toda Familia</Title>
          <Text>Junte a sua familia com a nossa!</Text>
          <Text>Planos adultos e infantis com os melhores preços</Text>
        </TextContainer>
      </Hero>

      <Hero>
        <ImageContainer src={areasImg} />
        <TextContainer>
          <Title>Especialidades Diversas</Title>
          <Text>Temos colaboradores em todas as especialidades</Text>
          <Text>
            Garantindo sempre a máxima qualidade para nossos pacientes
          </Text>
        </TextContainer>
      </Hero>

      <SpecialtyContainer>
        <Message>
          <Title>Tratamento de qualidade para você e para quem você ama.</Title>
          <Text>
            Nossa prioridade é o seu bem-estar, seu feedback nos motiva mais a
            cada dia.
          </Text>
          <Text>Trabalhamos para ser cada vez melhores.</Text>
        </Message>

        <Grid>
          <GridItem>
            <img src={pediatria} />
            <h3>Pediátria</h3>
            <p>Garantindo a saúde da sua criança</p>
          </GridItem>
          <GridItem>
            <img src={clinico} />
            <h3>Clínico Geral</h3>
            <p>Garantindo a sua saúde</p>
          </GridItem>
          <GridItem>
            <img src={cardiologia} />
            <h3>Cardiologia</h3>
            <p>Cuidando do seu coração</p>
          </GridItem>
          <GridItem>
            <img src={fisioterapia} />
            <h3>Fisioterapia</h3>
            <p>Fortalecendo você ainda mais</p>
          </GridItem>
          <GridItem>
            <img src={oftalmo} />
            <h3>Oftalmologia</h3>
            <p>Sempre de olho na sua visão</p>
          </GridItem>
          <GridItem>
            <img src={dermatologia} />
            <h3>Dermatologia</h3>
            <p>Cuidando da sua pele sempre</p>
          </GridItem>
        </Grid>
      </SpecialtyContainer>
    </Container>
  );
};

export default Home;
