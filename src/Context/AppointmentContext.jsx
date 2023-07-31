import { createContext, useState } from "react";

export const appointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [IdAppointment, setIdAppointment] = useState(0);
  const [IdSchedule, setIdSchedule] = useState(null);
  const [ScheduleDate, setScheduleDate] = useState(null);
  const [ScheduleHour, setScheduleHour] = useState(null);

  return (
    <appointmentContext.Provider
      value={{
        IdAppointment,
        setIdAppointment,
        IdSchedule,
        setIdSchedule,
        ScheduleDate,
        setScheduleDate,
        ScheduleHour,
        setScheduleHour,
      }}
    >
      {children}
    </appointmentContext.Provider>
  );
};
