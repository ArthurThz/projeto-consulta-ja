import { useState, useEffect, useContext } from "react";
import { userContext } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";

import { apiRoute } from "../../../services/api";
import Button from "../../Layout/Button/button";
import {
  Container,
  Card,
  Group,
  BtnNewAppointment,
  EmptyAppointments,
} from "./styles";

const MyAppointments = () => {
  const navigate = useNavigate();
  const [Consultation, setConsultation] = useState([]);
  const [Reload, setReload] = useState(true);
  const { user } = useContext(userContext);

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
    <Container>
      <h1>Minhas consultas</h1>
      {Consultation.length > 0 ? (
        <>
          {Consultation.map((consulta) => {
            const { id, data, hora, nome_medico, especialidade } = consulta;
            return (
              <Card key={id}>
                <h2 className="doctor">{`Dr(a): ${nome_medico}`}</h2>
                <span className="specialty">{`Especialidade: ${especialidade}`}</span>
                <Group>
                  <span>Data: {data}</span>
                  <span>Hora: {hora}</span>
                </Group>
                <Group>
                  <Button
                    onClick={() => deleteAppointment(id, data, hora)}
                    className="mark-off"
                  >
                    Cancelar Agendamento
                  </Button>
                </Group>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          <EmptyAppointments>
            <h2>Parece que você ainda não marcou nenhuma consulta</h2>
            <p>Clique no botão e marque uma consulta agora mesmo!!</p>
            <BtnNewAppointment onClick={() => navigate("/novaconsulta")}>
              Nova Consulta
            </BtnNewAppointment>
          </EmptyAppointments>
        </>
      )}
    </Container>
  );
};

export default MyAppointments;
