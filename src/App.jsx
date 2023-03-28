import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material';

function App() {

  return (
   <div>
    <CustomTypo variant="h1" color="initial">
      Lorem ipsum dolor sit.
    </CustomTypo>
   </div>
  )
}

const CustomTypo = styled(Typography)(({ theme }) => ({
  fontFamily:theme.typography.customFonts.DmSans,
}));

export default App
