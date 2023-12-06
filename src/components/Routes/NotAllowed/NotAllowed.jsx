import { useNavigate } from "react-router-dom";
import Button from "../../Layout/Button/button";
import { Container, Image, Message, Text, Title } from "./styles";
import unauthorizedImg from "../../../assets/image/unauthorized.svg";
const NotAllowed = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Atenção!!</Title>
      <Message>
        <Text>
          Você não tem permissão para acessar esta área, faça login para
          continuar.
        </Text>
        <Image src={unauthorizedImg} alt="not allowed image" />
      </Message>
      <Button label="Fazer Login" onClick={() => navigate("/login")} />
    </Container>
  );
};

export default NotAllowed;
