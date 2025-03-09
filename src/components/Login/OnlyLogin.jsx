import { useEffect, useState } from "react";
import { signInWithGoogle, auth } from "../../../firebaseConfig";
import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import React from 'react'
  
  export const OnlyLogin = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
          await signInWithGoogle();
        } catch (error) {
          console.error("Error al iniciar sesión", error);
        } finally {
          setLoading(false);
        }
      }

    return (
        <>
        <Typography variant="h5" mb={2}>Iniciar sesión</Typography>
        <Button 
          variant="contained" startIcon={<Google />} 
          fullWidth sx={{ backgroundColor: "#db4437", color: "white" }}
          onClick={handleLogin} disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Iniciar con Google"}
        </Button>
      </>
    )
  }
  