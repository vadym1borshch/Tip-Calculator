import React from 'react'
import './AppStyles'
import Box from '@mui/material/Box'
import { styles } from './AppStyles'
import { TipCalculator } from './TipCalculator/TipCalculator'

function App() {
  return (
    <Box sx={styles}>
      <TipCalculator />
    </Box>
  )
}

export default App
