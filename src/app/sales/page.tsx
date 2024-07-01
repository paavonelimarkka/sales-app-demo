'use client'

import React, { useEffect, useState } from 'react'
import { Grid, List, ListItem, Typography } from '@mui/material'
import axios from 'axios'

import SaleCard from '@/components/SaleCard'

interface Sale {
  id: string
  itemName: string
  itemProducer: string
  price: number
  discountPercent: number
  discountOverdueDate: string
}

const SalesList = (): React.ReactElement => {
  const [sales, setSales] = useState<Sale[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getSales = async () => {
      try {
        const response = await axios.get('http://localhost:5000/sales')
        setSales(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch sales')
        setLoading(false)
      }
    }
    getSales()
  }, [])

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography>{error}</Typography>

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h2' sx={{ ml: 2, my: 4, fontSize: '3rem' }}>
          Sales
        </Typography>
      </Grid>

      <List>
        <Grid container spacing={1}>
          {sales.map((sale) => {
            return (
              <Grid item lg={4} md={6} sm={12} key={sale.id}>
                <ListItem>
                  <SaleCard sale={sale} />
                </ListItem>
              </Grid>
            )
          })}
        </Grid>
      </List>
    </Grid>
  )
}

export default SalesList
