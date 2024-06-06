import { ChangeEvent, FC, useState } from 'react'
import { Box, Button, Card, TextField } from '@mui/material'
import { ServiceTip } from './ServiceTip'
import {mainContainer} from "./styles";

interface ITipCalculatorProps {}

export const TipCalculator: FC<ITipCalculatorProps> = () => {
  const [price, setPrice] = useState(0)
  const [myTip, setMyTip] = useState('')
  const [friendTip, setFriendTip] = useState('')

  const handlePriceChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPrice(Number(e.currentTarget.value.replace(/[^0-9]/g, '')))
  }

  const handleMyTipChange = (value: string) => {
    setMyTip(value)
  }
  const handleFriendTipChange = (value: string) => {
    setFriendTip(value)
  }
  const handleReset = () => {
    setPrice(0)
    setFriendTip('')
    setMyTip('')
  }

  const myPercent = Math.round(price * (Number(myTip) / 100))
  const friendPercent = Math.round(price * (Number(friendTip) / 100))
  const totalTip = myPercent + friendPercent
  const totalPrice = price + totalTip

  return (
    <Card
      sx={mainContainer}
    >
      <Box className="inputContainer">
        <span>
          bill :
        </span>
        <TextField value={price} onChange={handlePriceChange} />
      </Box>

      <ServiceTip  value={myTip} onChange={handleMyTipChange}>
        myTip
      </ServiceTip>
      <ServiceTip value={friendTip} onChange={handleFriendTipChange}>
        friendTip
      </ServiceTip>
      <Box>
        {!!price && (
          <p>
            you must pay {totalPrice}$ ({`${price}$`} + {`${totalTip}$`})
          </p>
        )}
      </Box>
      <Button onClick={handleReset}>reset</Button>
    </Card>
  )
}
