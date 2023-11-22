// React icons
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SlEnvolope, SlPhone } from "react-icons/sl";
import { TbMapPin } from "react-icons/tb";

import {
  Container,
  Contacts,
  SocialMedia,
  Title,
  SocialMediaLinks,
  ContactItem,
  Copyright,
  Row,
  StyledFooter,
} from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialMedia>
          <Title>Nossas redes sociais</Title>
          <SocialMediaLinks href="">
            <FaFacebook />
            Facebook
          </SocialMediaLinks>
          <SocialMediaLinks href="">
            <FaInstagram />
            Instagram
          </SocialMediaLinks>
        </SocialMedia>

        <Contacts>
          <Title>Nossos contatos</Title>
          <ContactItem>
            <SlPhone /> (11) 95555-5555
          </ContactItem>
          <ContactItem>
            <SlEnvolope /> consultaja@consulta.com.br
          </ContactItem>
          <ContactItem>
            <TbMapPin /> Rua Consulta ja, 115, Sp, São Paulo
          </ContactItem>
        </Contacts>
      </Container>
      <Copyright>Consulta já &copy; 2022</Copyright>
    </StyledFooter>
  );
};

export default Footer;
