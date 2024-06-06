import { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { formContainer } from './styles'

interface IServiceTipProps {
  children?: ReactNode
  onChange: (query: string) => void
  value: string
}

export const ServiceTip: FC<IServiceTipProps> = ({
  children,
  onChange,
  value,
}) => {
  const handleChange = (e: SelectChangeEvent) => {
    onChange(e.target.value as string)
  }

  return (
    <Box sx={formContainer}>
      <span>{children} :</span>
      <Box className="form">
        <FormControl fullWidth>
          <Select id="tipSelect" value={value} onChange={handleChange}>
            <MenuItem value={5}>5 %</MenuItem>
            <MenuItem value={10}>10 %</MenuItem>
            <MenuItem value={20}>20 %</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}
