import "./DoctorCard.styles.scss";

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
  const [schedule, setSchedule] = useState([]);

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
          return (
            <Card>
              <h2 className="doctor-name">{item.nome_doutor}</h2>
              <span className="specialty">{specialty.nome_especialidade}</span>
              <DropDownMenu doctorId={item.id} />
              <Button
                onClick={() =>
                  confirmAppointment(
                    item.id,
                    item.nome_doutor,
                    specialty.nome_especialidade
                  )
                }
              >
                Confirmar
              </Button>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default DoctorCard;
