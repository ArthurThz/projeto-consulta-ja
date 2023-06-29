import "./MyAppointments.styles.scss";

import { useState, useEffect, useContext } from "react";
import { userContext } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const navigate = useNavigate();
  const [Consultation, setConsultation] = useState([]);
  const [Reload, setReload] = useState(false);
  const { user } = useContext(userContext);

  useEffect(() => {
    api
      .get(`getConsulta.php?cpf=${user.cpf}`)
      .then((res) => {
        const { appointment } = res.data;
        setConsultation(Object.values(appointment));
        Reload === true ? setReload(false) : "";
      })
      .catch((err) => console.error(err));
  }, [Reload]);

  const deleteAppointment = (id) => {
    api
      .delete(`deleteConsulta.php?id=${id}`)
      .then(() => (Reload === false ? setReload(true) : ""))
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-consultation-container">
      <h1>Minhas consultas</h1>
      <div className="slider">
        {Consultation.length > 0 ? (
          <>
            {Consultation.map((consulta) => {
              return (
                <div key={consulta.id_consulta} className="info">
                  <div className="consultation">
                    <h3 className="doctor">{`Dr(a): ${consulta.nome_medico}`}</h3>
                    <span className="specialty">{`Especialidade: ${consulta.nome_especialidade}`}</span>
                  </div>
                  <div className="options">
                    <button className="call">Ligar</button>
                    <button
                      onClick={() => deleteAppointment(consulta.id_consulta)}
                      className="mark-off"
                    >
                      Desmarcar
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div className="empty-appointment">
              <h2>Parece que você ainda não marcou nenhuma consulta</h2>
              <a onClick={() => navigate("/novaconsulta")}>
                Clique aqui e marque uma agora mesmo
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
