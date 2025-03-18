import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import "dayjs/locale/es";
import ButtonSend from "../ButtonSend/ButtonSend";

export default function Calendar({getDataCalendar}) {

  const [valueDate, setValueDate] = useState()

  const handleDateChange = ({$d}) => {
    getDataCalendar($d)
    // setValueDate($d)
    console.log($d)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DateCalendar onChange={handleDateChange} />
      <ButtonSend onClick={handleDateChange} />
    </LocalizationProvider>
  );
}
