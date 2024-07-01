"use client"

import { Card, CardContent, CardHeader, Grid, List, ListItem, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"

interface Sale {
  id: string,
  itemName: string,
  itemProducer: string,
  price: number,
  discountPercent: number,
  discountOverDueDate: string
}

const SalesList = (): React.ReactElement => {

  const [sales, setSales] = useState<Sale[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getSales = async () => {
      try {
        const response = await axios.get('http://localhost:5000/sales');
        setSales(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    }

    getSales()
  }, [])

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography>{error}</Typography>

  return (
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h2' sx={{ mt: 4, fontSize: '3rem' }}>
        Sales
      </Typography>
      
      <List>
        {sales.map(sale => {
          return (
            <ListItem key={sale.id}>
              <Card sx={{ minWidth: 500 }}>
                <CardHeader title={`${sale.itemProducer}: ${sale.itemName}`} />
                <CardContent>
                  <Typography sx={{ mt: 2 }}>
                    {`Discount: -${sale.discountPercent}%`}
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    {`Price: ${sale.price}`}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          )
        })}
      </List>

    </Grid>
  )
}

export default SalesList