import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonTime from '../ButtonTime/ButtonTime'
import Calendar from '../Calendar/Calendar'
import {Texts} from '../Texts/Texts';
import Login from '../Login/Login';
import { useEffect } from "react";
import { logout } from "../../../firebaseConfig";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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
        <button onClick={logout}>Cerrar sesión</button>
        
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
