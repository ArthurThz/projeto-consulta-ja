import "./Footer.styles.scss";

// React icons
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SlEnvolope, SlPhone } from "react-icons/sl";
import { TbMapPin } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <div className="social-media">
          <span>Redes sociais</span>
          <section>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </section>
        </div>

        <div className="contact">
          <span>Contatos</span>
          <section>
            <p>
              <SlEnvolope /> consultaja@consulta.com.br
            </p>
            <p>
              <SlPhone /> (11) 95555-5555
            </p>
            <p>
              <TbMapPin /> Rua Consulta ja, 115, Sp, São Paulo
            </p>
          </section>
        </div>
      </div>
      <div className="copyright">
        <span>Consulta já &copy; 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
