import React, { Children } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <Grid item xs={12}>
      <Typography
        variant='h1'
        sx={{ textAlign: 'center', mt: 4, fontSize: '2.5rem' }}
      >
        Sale App
      </Typography>
      <Typography>Log In!</Typography>
    </Grid>
  )
}
