import { Container, Item, List } from "./styles";
import { useNavigate } from "react-router-dom";
import { ToggleMenuContext } from "../../../Context/toggleMenuContext";
import { isLoggedContext } from "../../../Context/IsLoggedContext";
import { useContext } from "react";

const MenuMobile = () => {
  const navigate = useNavigate();
  const { setMenuIsOpen } = useContext(ToggleMenuContext);
  const { isLogged, setIsLogged } = useContext(isLoggedContext);

  const handleOptions = (path) => {
    setMenuIsOpen(false);
    navigate(path);
  };

  const handleLogOut = () => {
    setIsLogged(false);
    setMenuIsOpen(false);
    navigate("/");
  };
  return (
    <Container>
      <List>
        {isLogged ? (
          <>
            <Item onClick={() => handleOptions("/")}>Home</Item>
            <Item onClick={() => handleOptions("/novaconsulta")}>
              Nova consulta
            </Item>
            <Item onClick={() => handleOptions("/minhasconsultas")}>
              Minhas Consultas
            </Item>
            <Item onClick={handleLogOut}>Sair</Item>
          </>
        ) : (
          <>
            <Item onClick={() => handleOptions("/")}>Home</Item>
            <Item onClick={() => handleOptions("/login")}>Login</Item>
          </>
        )}
      </List>
    </Container>
  );
};

export default MenuMobile;
