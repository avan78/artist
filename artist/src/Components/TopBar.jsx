import Stack from '@mui/material/Stack';
import {TopBarButton} from "../Elements/Button";
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import FeedTwoToneIcon from '@mui/icons-material/FeedTwoTone';
import EmojiPeopleTwoToneIcon from '@mui/icons-material/EmojiPeopleTwoTone';

export const TopBar = ({children}) => {

  return(
      <Stack
      direction="row"
      spacing="2rem"
      alignItems="center"
      justifyContent="center"
      sx={{padding:"1.5rem"}}
      >
        <TopBarButton startIcon={<NewReleasesTwoToneIcon/>}>News</TopBarButton>
        <TopBarButton startIcon={<PhotoSizeSelectActualTwoToneIcon/>}>Pictures</TopBarButton>
        <TopBarButton startIcon={<PhotoCameraTwoToneIcon/>}>Photos</TopBarButton>
        <TopBarButton startIcon={<FeedTwoToneIcon/>}>Articles</TopBarButton>
        <TopBarButton startIcon={<EmojiPeopleTwoToneIcon/>}>Artist</TopBarButton>
      </Stack>
  )
}