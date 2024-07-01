"use client"

import { Card, CardContent, CardHeader, Grid, List, ListItem, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"

interface Sale {
  id: string,
  itemName: string,
  itemProducer: string,
  price: number,
  discountPercent: number,
  discountOverdueDate: string,
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
        setError('Failed to fetch sales');
        setLoading(false);
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
          {sales.map(sale => {
            return (
              <Grid item lg={4} md={6} sm={12}>
                <ListItem key={sale.id}>
                  <Card sx={{ width: 1 }}>
                    <CardHeader title={sale.itemName} />
                    <CardContent>

                      <Grid container spacing={1}>

                        <Grid item xs={6}>
                          <Typography>
                            Brand:
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>
                            {sale.itemProducer}
                          </Typography>
                        </Grid>

                        <Grid item xs={6}>
                          <Typography>
                            Discount:
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>
                            {`-${sale.discountPercent}%`}
                          </Typography>
                        </Grid>

                        <Grid item xs={6}>
                          <Typography>
                            Price:
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>
                            {sale.price}
                          </Typography>
                        </Grid>

                        <Grid item xs={6}>
                          <Typography>
                            Sale overdue:
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>
                            {sale.discountOverdueDate}
                          </Typography>
                        </Grid>

                      </Grid>

                    </CardContent>
                  </Card>
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