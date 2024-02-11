import { useRouteError } from "react-router-dom";
import { Box, Typography, Link } from '@mui/material';
export const ErrorPage = () => {
    const error = useRouteError();

  return(
      <Box>
         <Typography>
             Bohužel došlo k chybě:
         </Typography>
          <Typography>
             {error.statusText || error.message}
         </Typography>
          <Typography>
              Pokuste se stránku obnovit nebo se vraťte na domovskou stránku.
          </Typography>
          <Link
          component="button"
          variant="button"
          onClick={()=>{
             console.log("Jdu na hlavní stranu.");
          }}
          >
              Domů
          </Link>
      </Box>
  )
}