import "./MyAppointments.styles.scss";

import { useState, useEffect, useContext } from "react";
import { userContext } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";

import { apiRoute } from "../../../services/api";

const MyAppointments = () => {
  const navigate = useNavigate();
  const [Consultation, setConsultation] = useState([]);
  const [Reload, setReload] = useState(true);
  const { user } = useContext(userContext);

  console.log("renderizou");

  useEffect(() => {
    document.title = "Minhas Consultas";
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await apiRoute.get(
      `/appointments?cpf_paciente=eq.${user.cpf}&select=*`
    );
    setConsultation(data);
  };

  const deleteAppointment = async (id, data, hora) => {
    apiRoute.patch(`/schedule?data=eq.${data}&hora=eq.${hora}`, {
      is_avaliable: true,
    });

    apiRoute.delete(`/appointments?id=eq.${id}`).then((res) => {
      if (res.status !== 204) {
        alert("algo deu errado");
        console.log(res);
        return;
      }

      fetchData();
    });
  };

  return (
    <div className="my-consultation-container">
      <h1>Minhas consultas</h1>
      <div className="slider">
        {Consultation.length > 0 ? (
          <>
            {Consultation.map((consulta) => {
              return (
                <div key={consulta.id} className="info">
                  <div className="consultation">
                    <h3 className="doctor">{`Dr(a): ${consulta.nome_medico}`}</h3>
                    <span className="specialty">{`Especialidade: ${consulta.especialidade}`}</span>
                    <div className="appointment-info">
                      <span>Data: {consulta.data}</span>
                      <span>Hora: {consulta.hora}</span>
                    </div>
                  </div>
                  <div className="options">
                    <button className="call">Ligar</button>
                    <button
                      onClick={() =>
                        deleteAppointment(
                          consulta.id,
                          consulta.data,
                          consulta.hora
                        )
                      }
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
