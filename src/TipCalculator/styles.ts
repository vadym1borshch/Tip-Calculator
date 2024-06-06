import { SxProps, Theme } from '@mui/material'

export const mainContainer: SxProps<Theme> = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',

  '& .inputContainer': {
    width: '50%',
    display: 'flex',
    marginBottom: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    "& .MuiFormControl-root":{
      width: '50%',
    },
    '& input': {
    },
  },
}

export const formContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '50%',
  justifyContent: 'space-between',
  flexWrap: "wrap",
  '& .MuiFormControl-root': {
    marginBottom: '10px',
  },
  '& .form': {
    width: '50%',
  },
}
