import type { Metadata } from 'next'
import React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Grid } from '@mui/material'
import NavBar from '@/components/AppBar'

export const metadata: Metadata = {
  title: 'Sales App Demo',
  description: 'Example app for demonstration purposes',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='en'>
      <body>
        <Grid container>
          <NavBar />
          <Grid item xs={12} sx={{ p: 2 }}>
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  )
}

export default RootLayout
