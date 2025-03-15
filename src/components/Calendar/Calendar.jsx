import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import "dayjs/locale/es";

export default function BasicDateCalendar() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date) => {
    console.log("Valor recibido en onChange:", date);

    // Si `date` es un número (timestamp), conviértelo a dayjs
    if (typeof date === "number") {
      date = dayjs(date);
    }

    // Convierte `date` en un objeto válido de dayjs
    const parsedDate = dayjs(date);

    if (!parsedDate.isValid()) {
      console.error("Fecha no válida:", date);
      return;
    }

    setSelectedDate(parsedDate);

    console.log("Día:", parsedDate.date());
    console.log("Mes:", parsedDate.month() + 1); // Meses en dayjs van de 0 a 11
    console.log("Año:", parsedDate.year());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DateCalendar value={selectedDate} onChange={handleDateChange} />
    </LocalizationProvider>
  );
}
