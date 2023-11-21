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
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Title>Nossas redes sociais</Title>

      <SocialMedia>
        <SocialMediaLinks href="">
          <FaFacebook />
          Facebook
        </SocialMediaLinks>
        <SocialMediaLinks href="">
          <FaInstagram />
          Instagram
        </SocialMediaLinks>
      </SocialMedia>

      <Title>Nossos contatos</Title>
      <Contacts>
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

      <Copyright>Consulta já &copy; 2022</Copyright>
    </Container>
  );
};

export default Footer;
