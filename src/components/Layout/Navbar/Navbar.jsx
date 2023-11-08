import "./Navbar.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
// Icons
import navbarIcon from "../../../assets/image/navbar-icon.svg";
import { isLoggedContext } from "../../../Context/IsLoggedContext";
import {
  Container,
  Links,
  Item,
  Underline,
  LinksContainer,
  Logo,
} from "./styles";
const NavBar = () => {
  const navigate = useNavigate();

  const { isLogged, setIsLogged } = useContext(isLoggedContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleLogOut = () => {
    setIsLogged(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
  };

  const closeMenu = () => setMenuIsOpen(false);
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <h1>Consulta já</h1>
        <img src={navbarIcon} alt="icon consultaja" />
      </Logo>

      <LinksContainer>
        {isLogged ? (
          <>
            <Links onClick={() => navigate("/")}>
              <Item>Home</Item>
              <Underline />
            </Links>
            <Links onClick={() => navigate("/novaconsulta")}>
              <Item>Nova Consulta</Item>
              <Underline />
            </Links>
            <Links onClick={() => navigate("/minhasconsultas")}>
              <Item>Minhas Consultas</Item>
              <Underline />
            </Links>
            <Links onClick={handleLogOut}>
              <Item>Sair</Item>
              <Underline />
            </Links>
          </>
        ) : (
          <>
            <Links onClick={() => navigate("/")}>
              <Item>Home</Item>
              <Underline />
            </Links>
            <Links onClick={() => navigate("/login")}>
              <Item>Login</Item>
              <Underline />
            </Links>
          </>
        )}
      </LinksContainer>
    </Container>
  );
};

export default NavBar;
