import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    <Stack
     direction='row' justifyContent='space-between' alignItems='flex-start' sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'},
    justifyContent: 'none'}} px='20px'>
      <Link to="/" style={{marginTop: '-1.2rem'}}>
        <img src={logo} alt="logo" style={{width: '120px',height: '70px', margin: '0 20px'}}/>
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
        style={{marginLeft: '-8rem'}}
      >
        <Link to="/" style={{textDecoration: 'none',color: '#3A1212',borderBottom: '3px solid #FF2625', fontWeight: 'bold'}}>Home</Link>
        <a href='#exercises' style={{textDecoration: 'none',color: '#3A1212', fontWeight: 'bold'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar