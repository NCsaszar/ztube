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
import styled from 'styled-components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#272628',
    },
  },
});

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ResponsiveImg = styled.img`
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export default function Navbar({ setOpenMenu, openMenu }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, paddingBottom: '65px' }}>
        <AppBar position='fixed' color='primary'>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{ mr: 2 }}
                onClick={() => setOpenMenu(!openMenu)}
              >
                <MenuIcon sx={{ color: 'white', fontSize: '32px' }} />
              </IconButton>
              <LinkWrapper
                to='/'
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <ResponsiveImg src={logo} alt='logo' height='35' width='35' />
              </LinkWrapper>
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
