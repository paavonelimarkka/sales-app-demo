
import React, { useState } from "react"
import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material"
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { format } from "date-fns/format"

type SaleCardProps = {
  sale: Sale
}

interface Sale {
  id: string,
  itemName: string,
  itemProducer: string,
  price: number,
  discountPercent: number,
  discountOverdueDate: string,
}


const SaleCard = (props: SaleCardProps): React.ReactNode => {
  const [isFave, setIsFave] = useState(false)

  return (
    <Card sx={{ width: 1 }}>
      <CardHeader
        title={props.sale.itemName}
        action={
          <IconButton
            aria-label="set favourite"
            onClick={(e) => {
              e.preventDefault()
              setIsFave(!isFave)
            }}
          >
            {isFave
              ? <Favorite color="error" />
              : <FavoriteBorder />
            }
          </IconButton>
        }
      />
      <CardContent>

        <Grid container spacing={1}>

          <Grid item xs={6}>
            <Typography>
              Brand:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {props.sale.itemProducer}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              Discount:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {`-${props.sale.discountPercent}%`}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              Price:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {`${props.sale.price} euros`}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              Sale overdue:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {format(props.sale.discountOverdueDate, 'dd.MM.yyyy')}
            </Typography>
          </Grid>

        </Grid>

      </CardContent>
    </Card>
  )
}

export default SaleCard