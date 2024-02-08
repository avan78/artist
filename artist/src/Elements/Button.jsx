import * as React from 'react';
import Button from '@mui/material/Button';

export const TopBarButton = ({children, startIcon, endIcon, onClick}) => {
  return(
      <Button
      variant="outlined"
      startIcon={startIcon || null}
      endIcon={endIcon || null}
      onClick={onClick}
      sx={{color:"#4B081B", border:"1px solid #4B081B"}}
      >
          {children}
      </Button>
  )
}