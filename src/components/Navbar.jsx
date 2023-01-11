import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants.js';
import SearchBar from './SearchBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#413F42',
    },
  },
});

export default function Navbar2() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='primary'>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{ mr: 2 }}
              >
                <MenuIcon sx={{ color: '#F73D93' }} />
              </IconButton>
              <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt='logo' height='45' width='45' />
              </Link>
            </Box>
            <Box
              sx={{
                margin: '0 auto',
              }}
            >
              <SearchBar />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
