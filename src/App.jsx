import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { styled, Container } from '@mui/material';
import DrawerAppBar from './components/AppBar';

function App() {

  return (
   <>
   
   <DrawerAppBar/>
   </>
  )
}

const CustomTypo = styled(Typography)(({ theme }) => ({
  fontFamily:theme.typography.customFonts.DmSans,
}));

export default App
