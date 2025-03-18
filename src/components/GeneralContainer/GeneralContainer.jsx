import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonTime from '../ButtonTime/ButtonTime'
import Calendar from '../Calendar/Calendar'
import {Texts} from '../Texts/Texts';
import Login from '../Login/Login';
import Details from './DetailsMeet';
import './GeneralContainer.css'

import { useEffect, useState } from "react";
import ButtonSend from '../ButtonSend/ButtonSend';

export default function RowAndColumnSpacing() {
  const [dataCalendar, setDataCalendar] = useState("")
  useEffect(() => {
    console.log("GeneralContainer se ha montado");
  }, []);

const getDataCalendar = (childData) => {
  setDataCalendar(childData)
 }

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
      <div className='container'>
        <Details />
        {/* <Texts subtitle={'Seleccione una fecha y hora'} /> */}
        <div className='SeleccionFecha'>
          <h3>Seleccione una fecha y hora</h3>
        <Calendar />
        </div>
        </div>
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
