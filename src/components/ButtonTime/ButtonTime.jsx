import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    const [handdleButton, setHanddleButton] = useState(true)
    const [handdleStatus, setHanddleStatus] = useState('')

    const handdleClic = () => {
        setHanddleButton(!handdleButton)
        handdleButton ? setHanddleStatus('contained') : setHanddleStatus('outlined') 
    }

  return (
    <Stack spacing={2} direction="column">
      <Button onClick={handdleClic} variant={handdleStatus}>9:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>10:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>10:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>11:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>11:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>12:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>12:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>13:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>13:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>14:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>14:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>15:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>15:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>16:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>16:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>17:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>17:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>18:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>18:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>19:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>19:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>20:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>20:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>21:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>21:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>22:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>22:30</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>23:00</Button>
      <Button onClick={handdleClic} variant={handdleStatus}>23:30</Button>
    </Stack>
  );
}
