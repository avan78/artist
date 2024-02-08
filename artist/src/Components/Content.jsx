import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({})=>({
    //page
    gap:1,
    backgroundColor:"#fff",
    //font
    fontFamily:"Cambria",
    fontSize:"1rem",
    color:"#073763",
    //other
    textAlign: "left",
    alignItems: "center",
    justifyContent: "left",
    marginLeft:"1rem",
}));
export const Content = ({children}) => {
  return(
      <StyledBox>
          obsah ghjghgh  ffg j  fghkhk j hfg f gd ffg fgff h gjghdrfcgbdf  gjhj dvhg jhjhj df
           fhfg fh h  h j h  hghgjhfgdc fhvjnmjnk dfgvcgfh fhgjgk gfgdfxf gvh  gdfdcb gggjg bnmvnm
          fg h hjjhjhj h h k
          {children}
      </StyledBox>
  )
};