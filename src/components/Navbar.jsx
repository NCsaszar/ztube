import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants.jsx';
import SearchBar from './SearchBar.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import Button from '@mui/material/Button';

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

export default function Navbar({ setOpenMenu, openMenu, setOpenMenu2, openMenu2 }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, paddingBottom: '65px' }}>
        <AppBar position='fixed' color='primary'>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
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
              <Button
                onClick={() => setOpenMenu2(!openMenu2)}
                sx={{
                  color: 'white',
                  bgcolor: '#413f42',
                  ':hover': { bgcolor: '#413f42' },
                }}
              >
                Explore
              </Button>
              <LinkWrapper to='/' style={{ display: 'flex', alignItems: 'center' }}>
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
