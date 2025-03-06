import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import "dayjs/locale/es";

export default function BasicDateCalendar() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DateCalendar />
    </LocalizationProvider>
  );
}
