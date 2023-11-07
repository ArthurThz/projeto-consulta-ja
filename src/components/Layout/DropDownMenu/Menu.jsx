import { useState, useEffect, useContext } from "react";
import { apiRoute } from "../../../services/api";

import { appointmentContext } from "../../../Context/AppointmentContext";
import { Options, ScheduleItem } from "./styles";

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
    setOption(`${data} ${hora}`);
    setIdSchedule(id);
    setScheduleDate(data);
    setScheduleHour(hora);
    console.log(id, data, hora);
    console.log("Entrou na funcao");
  };

  return (
    <>
      <Options name="datas" onChange={() => selectScheduleOption()}>
        <ScheduleItem value="0">Escolha uma data</ScheduleItem>
        {schedule.map((item) => {
          const { data, hora, id } = item;
          return (
            <ScheduleItem key={id} value={id}>
              {`${data} ${hora}`}
            </ScheduleItem>
          );
        })}
      </Options>
    </>
  );
};

export default DropDownMenu;
