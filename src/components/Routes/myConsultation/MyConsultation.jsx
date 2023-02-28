import "./MyConsultation.styles.scss";

import { useState, useEffect } from "react";

const MyConsultation = () => {
  const [Consultation, setConsultation] = useState([]);

  useEffect(() => {
    // API que contem a tabela de consultas
    fetch("http://localhost:5000/consultation", {
      method: "GET",
      headers: {
        "Content-type": "Application/JSON",
      },
    })
      .then((response) => response.json())
      .then((data) => setConsultation(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="my-consultation-container">
      {Consultation.map((consulta) => {
        return (
          <div key={consulta.id} className="consultation">
            <h3 className="doctor">{`Dr(a): ${consulta.doutor}`}</h3>
            <span className="specialty">{`Especialidade: ${consulta.especialidade}`}</span>
            <span className="date">{`Data: ${consulta.Data}`}</span>
            <span className="hour">{`Hora: ${consulta.horario}`}</span>
            <span className="local">{`Local: ${consulta.local}`}</span>
            <div className="options">
              <button className="call">Ligar</button>
              <button className="mark-off">Desmarcar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyConsultation;
