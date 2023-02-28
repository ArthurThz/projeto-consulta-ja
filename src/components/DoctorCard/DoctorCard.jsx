import "./DoctorCard.styles.scss";

import { useState, useEffect, useContext } from "react";

import { ConsultationContext } from "../../Context/ConsultationContext";
const DoctorCard = () => {
  const { IdConsultation } = useContext(ConsultationContext);
  const [Doctors, setDoctors] = useState([]);

  let teste = [];

  useEffect(() => {
    fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        "Content-type": "Application/JSON",
      },
    })
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredDoctors = Doctors.filter(
    (item) => item.IdEspecialidade == IdConsultation
  );

  console.log(filteredDoctors);

  return (
    <div className="doctors-container">
      {filteredDoctors.map((item) => {
        return (
          <div key={item.IdEspecialidade} className="card-doctors">
            <h2 className="doctor-name">{item.name}</h2>
            <span className="specialty">{item.Especialidade}</span>
            <p className="local">{item.endereco}</p>
            <button className="confirm-btn">Confirmar</button>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorCard;
