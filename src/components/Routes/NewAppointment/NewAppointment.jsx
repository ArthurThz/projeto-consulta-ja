import "./NewAppointment.styles.scss";

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ConsultationContext } from "../../../Context/ConsultationContext";

const NewAppointment = () => {
  const [Specialty, setSpecialty] = useState([]);
  const { setIdConsultation } = useContext(ConsultationContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/specialty", {
      method: "GET",
      headers: {
        "Content-type": "Aplication/JSON",
      },
    })
      .then((response) => response.json())
      .then((data) => setSpecialty(data))

      .catch((error) => console.log(error));
  }, []);

  const orderedSpecialty = Specialty.sort((x, y) => {
    let a = x.name;
    let b = y.name;

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
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default NewAppointment;
