import "./Menu.styles.scss";

import { useState, useEffect, useContext } from "react";

import { apiRoute } from "../../../services/api";

import { appointmentContext } from "../../../Context/AppointmentContext";

const DropDownMenu = ({ doctorId }) => {
  const { setIdSchedule, setScheduleDate, setScheduleHour } =
    useContext(appointmentContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [option, setOption] = useState("Escolha uma opção");

  const handleMenu = () => {
    setMenuIsOpen(menuIsOpen === false ? true : false);
  };

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
    setMenuIsOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="title" onClick={handleMenu}>
        <p>{option}</p>
        <p>icon</p>
      </div>
      {menuIsOpen === true ? (
        <div className="menu">
          <ul className="list">
            {schedule.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() =>
                    selectScheduleOption(item.id, item.data, item.hora)
                  }
                >
                  <span>{item.data}</span>
                  <span>{item.hora}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropDownMenu;
