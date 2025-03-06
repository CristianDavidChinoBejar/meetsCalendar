// import * as React from 'react';
// import { useState } from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export default function BasicButtons() {
//     const [handdleButton, setHanddleButton] = useState(true)
//     const [handdleStatus, setHanddleStatus] = useState('')

//     const schedules = [
//       "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
//       "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
//       "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
//       "21:30", "22:00", "22:30", "23:00", "23:30"
//     ];

//     const handdleClick = () => {
//         setHanddleButton(!handdleButton)
//         handdleButton ? setHanddleStatus('contained') : setHanddleStatus('outlined') 
//     }

    

//   return (
//     <Stack spacing={2} direction="column">
//       {
//         schedules.map((schedule)=>{
//           return(
//             <Button onClick={handdleClick} variant={handdleStatus}>
//               {schedule}
//             </Button>
//           )
//         })
//       }

//     </Stack>
//   );
// }

import { useState } from "react";
import { Button, Stack } from "@mui/material";

export default function BasicButtons() {
  const horarios = [
    "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
    "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
    "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
    "21:30", "22:00", "22:30", "23:00", "23:30"
  ];

  // Estado que almacena solo el botón seleccionado
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  // Manejar el clic en un botón específico
  const handleClick = (hora) => {
    setBotonSeleccionado(botonSeleccionado === hora ? null : hora);
  };

  return (
    <Stack spacing={2} direction="column">
      {horarios.map((hora) => (
        <Button
          key={hora}
          onClick={() => handleClick(hora)}
          variant={botonSeleccionado === hora ? "contained" : "outlined"}
        >
          {hora}
        </Button>
      ))}
    </Stack>
  );
}
