import "./DoctorCard.styles.scss";

import { useState, useEffect, useContext } from "react";
import { userContext } from "../../Context/UserContext";

import { useNavigate } from "react-router-dom";
import { ConsultationContext } from "../../Context/ConsultationContext";

const DoctorCard = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const { IdConsultation } = useContext(ConsultationContext);
  const [Doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get(`getDoctors.php?especialidade=${IdConsultation}`).then((res) => {
      const { doctors } = res.data;
      setDoctors(Object.values(doctors));
    });
  }, []);

  const confirmAppointment = async (nomeMedico, nomeEspecialidade) => {
    let newAppointment = {
      medico: nomeMedico,
      especialidade: nomeEspecialidade,
      paciente: user.nome,
      cpf: user.cpf,
    };
    api.post("novaConsulta.php", newAppointment).then((res) => {
      const { error } = res.data;

      if (error === true) {
        alert("Não Foi possivel marcar sua consulta, tente mais tarde!");
        return;
      }
      alert("consulta marcada com sucesso!");
      navigate("/minhasconsultas");
    });
  };

  return (
    <div className="doctors-container">
      {Doctors.map((item) => {
        return (
          <div key={item.id} className="card-doctors">
            <h2 className="doctor-name">{item.nome}</h2>
            <span className="specialty">{item.nome_especialidade}</span>
            <button
              className="confirm-btn"
              onClick={() =>
                confirmAppointment(item.nome, item.nome_especialidade)
              }
            >
              Confirmar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorCard;
