import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonTime from '../ButtonTime/ButtonTime'
import Calendar from '../Calendar/Calendar'
import {Texts} from '../Texts/Texts';
import Login from '../Login/Login';
import { useEffect } from "react";

export default function RowAndColumnSpacing() {
  useEffect(() => {
    console.log("GeneralContainer se ha montado");
  }, []);
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 1000,
          height: "100%",
          padding: 2,
          position: "sticky",
          top: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Login /> */}
        <Login />
        
        <Texts subtitle={'Seleccione una fecha y hora'} />

        <Calendar />

      </Paper>
      
      <Paper
        elevation={3}
        sx={{
          width: 200,
          height: "100%", 
          overflowY: "auto",
          padding: 2,
        }}
      >
        
        <ButtonTime/>
        
      </Paper>
      </Box>
  );
}
