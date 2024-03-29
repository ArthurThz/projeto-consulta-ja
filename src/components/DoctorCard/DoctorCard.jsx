import DropDownMenu from "../Layout/DropDownMenu/Menu";
import Button from "../Layout/Button/button";

import { useState, useEffect, useContext } from "react";
import { userContext } from "../../Context/UserContext";

import { useNavigate } from "react-router-dom";
import { appointmentContext } from "../../Context/AppointmentContext";
import { Container, Card } from "./styles";

import { apiRoute } from "../../services/api";
const DoctorCard = () => {
  const navigate = useNavigate();

  const { user } = useContext(userContext);

  const { IdAppointment, IdSchedule, ScheduleDate, ScheduleHour } =
    useContext(appointmentContext);

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

      setSpecialty(data[0]);
    });
  }, []);

  const confirmAppointment = async (idMedico, nomeMedico, especialidade) => {
    let newAppointment = {
      id_medico: idMedico,
      nome_medico: nomeMedico,
      especialidade: especialidade,
      cpf_paciente: user.cpf,
      id_especialidade: specialty.id,
      data: ScheduleDate,
      hora: ScheduleHour,
    };

    apiRoute.patch(`/schedule?id=eq.${IdSchedule}`, { is_avaliable: false });

    apiRoute
      .post("/appointments", newAppointment)
      .then((res) => {
        if (res.status === !201) {
          console.log(res.status);
          return;
        }
        navigate("/minhasconsultas");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        {Doctors.map((item) => {
          const { nome_doutor, id } = item;
          const nomeEspecialidade = specialty.nome_especialidade;
          return (
            <Card key={id}>
              <h2 className="doctor-name">Dr(a) {nome_doutor}</h2>
              <span className="specialty">{nomeEspecialidade}</span>
              <DropDownMenu doctorId={id} />
              <Button
                label="Confirmar"
                onClick={() =>
                  confirmAppointment(id, nome_doutor, nomeEspecialidade)
                }
              />
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default DoctorCard;
