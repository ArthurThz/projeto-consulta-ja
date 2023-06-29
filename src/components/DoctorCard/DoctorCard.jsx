import "./DoctorCard.styles.scss";

import { useState, useEffect, useContext } from "react";
import { userContext } from "../../Context/UserContext";

import { useNavigate } from "react-router-dom";
import { appointmentContext } from "../../Context/ConsultationContext";

import { apiRoute } from "../../services/api";
const DoctorCard = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const { IdAppointment } = useContext(appointmentContext);
  const [specialty, setSpecialty] = useState([]);
  const [Doctors, setDoctors] = useState([]);

  useEffect(() => {
    apiRoute
      .get(`/doctors?id_especialidade=eq.${IdAppointment}&select=*`)
      .then((res) => {
        const { data } = res;
        setDoctors(data);
      });
  }, []);

  useEffect(() => {
    apiRoute.get(`/specialty?id=eq.${IdAppointment}&select=*`).then((res) => {
      const { data } = res;

      if (!data) {
        setSpecialty(null);
      }
      setSpecialty(data[0].nome_especialidade);
    });
  }, [specialty]);

  const confirmAppointment = async (nomeMedico, nomeEspecialidade) => {
    let newAppointment = {
      medico: nomeMedico,
      especialidade: nomeEspecialidade,
      paciente: user.nome,
      cpf: user.cpf,
    };
  };

  return (
    <div className="doctors-container">
      {Doctors.map((item) => {
        return (
          <div key={item.id} className="card-doctors">
            <h2 className="doctor-name">{item.nome_doutor}</h2>
            <span className="specialty">{specialty}</span>
            <button
              className="confirm-btn"
              onClick={() => confirmAppointment(item.nome, specialty)}
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
