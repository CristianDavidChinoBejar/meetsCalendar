import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "dayjs/locale/es";

export default function Calendar({getDataCalendar}) {

  const [valueDate, setValueDate] = useState()

  const handleDateChange = ({$d}) => {
    getDataCalendar($d)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DateCalendar onChange={handleDateChange} />
    </LocalizationProvider>
  );
}
