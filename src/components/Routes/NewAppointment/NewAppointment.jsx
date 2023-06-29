import "./NewAppointment.styles.scss";

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ConsultationContext } from "../../../Context/ConsultationContext";
import axios from "axios";

const NewAppointment = () => {
  const [Specialty, setSpecialty] = useState([]);
  const { setIdConsultation } = useContext(ConsultationContext);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("especialidades.php")
      .then((res) => {
        const { records } = res.data;
        setSpecialty(Object.values(records));
      })
      .catch((err) => console.log(err));
  }, []);

  const orderedSpecialty = Specialty.sort((x, y) => {
    let a = x.especialidade;
    let b = y.especialidade;

    return a == b ? 0 : a > b ? 1 : -1;
  });
  return (
    <div className="new-consultation-container">
      <p>Selecione uma especialidade</p>

      {orderedSpecialty.map((item) => {
        return (
          <a
            key={item.id}
            onClick={() => {
              setIdConsultation(item.id);
              navigate("/doctors");
            }}
            className="item"
          >
            {item.especialidade}
          </a>
        );
      })}
    </div>
  );
};

export default NewAppointment;
