import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { appointmentContext } from "../../../Context/AppointmentContext";

import { apiRoute } from "../../../services/api";

import { Container, ItemContainer } from "./styles";

import Input from "../../Layout/Input/input";

const NewAppointment = () => {
  const [Specialty, setSpecialty] = useState([]);
  const { setIdAppointment } = useContext(appointmentContext);
  const [filteredSpecialty, setFilteredSpecialty] = useState(Specialty);
  const [searchSpecialty, setSearchSpecialty] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    apiRoute.get("/specialty").then((res) => {
      const { data } = res;
      setSpecialty(data);
    });
  }, []);

  useEffect(() => {
    let filteredSpecialty = Specialty.filter((item) => {
      return item.nome_especialidade.toLowerCase().includes(searchSpecialty);
    });
    setFilteredSpecialty(filteredSpecialty);
  }, [Specialty, searchSpecialty]);

  const handleSearchSpecialty = (event) => {
    const { value } = event.target;
    setSearchSpecialty(value.toLowerCase());
  };

  const orderedSpecialty = Specialty.sort((x, y) => {
    let a = x.nome_especialidade;
    let b = y.nome_especialidade;

    return a == b ? 0 : a > b ? 1 : -1;
  });

  return (
    <Container>
      <h1>Selecione uma especialidade</h1>
      <Input
        type="text"
        name="Buscar Especialidade"
        onChange={handleSearchSpecialty}
      />
      {filteredSpecialty.map((item) => {
        return (
          <ItemContainer
            key={item.id}
            onClick={() => {
              setIdAppointment(item.id);
              navigate("/doctors");
            }}
            className="item"
          >
            {item.nome_especialidade}
            <div></div>
          </ItemContainer>
        );
      })}
    </Container>
  );
};

export default NewAppointment;
