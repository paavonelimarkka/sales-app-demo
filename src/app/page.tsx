import Image from "next/image";
import React from "react";
import Grid from '@mui/material/Grid'
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid item xs={12}>
      <Typography variant="h1" sx={{ textAlign: 'center', mt: 4 }}>
        Moro tää o atk ohjelma :--DD
      </Typography>
    </Grid>
  )
}
