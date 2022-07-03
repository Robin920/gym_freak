import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

import Logo from '../assets/images/Logo.png';

function Footer() {
  return (
    <Box mt='80px' bgcolor='#91d3fc'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <Stack direction='row' gap='20px'><img src={Logo} alt='logo' width='120px' height='70px'/>
        <Typography variant='h4' style={{fontWeight: '600', marginTop: '15px', marginLeft: '-25px'}}>Gym freak</Typography></Stack>
        <Typography variant='h5' pb='40px' mt='0px' ml='20px'>
          Made with ❤️ by Dewang Shekhar
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer