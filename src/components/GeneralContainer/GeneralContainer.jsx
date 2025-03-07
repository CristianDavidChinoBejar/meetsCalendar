import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonTime from '../ButtonTime/ButtonTime'
import Calendar from '../Calendar/Calendar'
import {Texts} from '../Texts/Texts';
import Login from '../Login/Login'

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
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid >
          <Item>
            <Login />
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>
            <Texts subtitle={'Seleccione una fecha y hora'} />
            <Calendar />
          </Item>
        </Grid>
        <Grid size={1}>
          <Item>
            <ButtonTime/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
