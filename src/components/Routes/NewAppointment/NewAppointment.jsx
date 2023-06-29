import "./NewAppointment.styles.scss";

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { appointmentContext } from "../../../Context/ConsultationContext";

import { apiRoute } from "../../../services/api";

const NewAppointment = () => {
  const [Specialty, setSpecialty] = useState([]);
  const { setIdAppointment } = useContext(appointmentContext);

  const navigate = useNavigate();

  useEffect(() => {
    apiRoute.get("/specialty").then((res) => {
      const { data } = res;

      setSpecialty(data);
    });
  }, []);

  const orderedSpecialty = Specialty.sort((x, y) => {
    let a = x.nome_especialidade;
    let b = y.nome_especialidade;

    return a == b ? 0 : a > b ? 1 : -1;
  });

  return (
    <div className="new-consultation-container">
      <p>Selecione uma especialidade</p>

      {Specialty.map((item) => {
        return (
          <a
            key={item.id}
            onClick={() => {
              setIdAppointment(item.id);
              navigate("/doctors");
            }}
            className="item"
          >
            {item.nome_especialidade}
          </a>
        );
      })}
    </div>
  );
};

export default NewAppointment;
