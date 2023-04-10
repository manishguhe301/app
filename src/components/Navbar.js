import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assests/Logo.svg';

const P = {
  color: 'black',
  marginRight: '40px',
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{ backgroundColor: '#fff', boxShadow: 'none' }}
      >
        <Toolbar>
          <Typography component='div' sx={{ flexGrow: 1 }}>
            <img
              src={Logo}
              alt='logo'
              height='36px'
              style={{ marginTop: '8px' }}
            />
          </Typography>
          <p style={P}>Our Solutions</p>
          <p style={P}>Resources</p>
          <p style={P}>About Us</p>
          <p style={P}>Careers</p>
          <Button
            style={{
              color: '#F48850',
              textTransform: 'capitalize',
              padding: '4px 24px',
              border: '1px solid #F48850',
            }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
