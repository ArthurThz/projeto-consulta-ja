import { useState, useEffect, useContext } from "react";
import { apiRoute } from "../../../services/api";

import { appointmentContext } from "../../../Context/AppointmentContext";
import { Options, OptionsContainer, Row, Title } from "./styles";

const DropDownMenu = ({ doctorId }) => {
  const { setIdSchedule, setScheduleDate, setScheduleHour } =
    useContext(appointmentContext);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    apiRoute
      .get(
        `/schedule?id_medico=eq.${doctorId}&select=*&is_avaliable=eq.TRUE&select=*`
      )
      .then((res) => {
        const { data } = res;
        setSchedule(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const selectScheduleOption = (id, data, hora) => {
    setIdSchedule(id);
    setScheduleDate(data);
    setScheduleHour(hora);
  };

  return (
    <>
      <OptionsContainer>
        <Title>Escolha uma opção</Title>
        <Row>
          {schedule.map((item) => {
            const { id, data, hora } = item;
            return (
              <>
                <Options
                  key={id}
                  onClick={() => selectScheduleOption(id, data, hora)}
                >{` Dia ${data} as ${hora}`}</Options>
              </>
            );
          })}
        </Row>
      </OptionsContainer>
    </>
  );
};

export default DropDownMenu;
