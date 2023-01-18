import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Sidebar, MenuSidebar } from './';
import { Box, Typography } from '@mui/material';

const Menus = ({
  openMenu,
  openMenu2,
  selectedCategory,
  setselectedCategory,
  selectedCategory2,
  setselectedCategory2,
}) => {
  return (
    <>
      <CSSTransition
        in={openMenu}
        timeout={300}
        unmountOnExit={true}
        classNames='menu'
      >
        <Box
          sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: '1px solid #3d3d3d',
            px: { sx: 0, md: 2 },
            background: '#413F42',
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
          />
          <Typography
            className='github'
            variant='body2'
            sx={{ mt: 1.5, color: '#fff' }}
          >
            @github/NCsaszar
          </Typography>
        </Box>
      </CSSTransition>
      <CSSTransition
        in={openMenu2}
        timeout={300}
        unmountOnExit={true}
        classNames='menu'
      >
        <Box
          sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: '1px solid #3d3d3d',
            px: { sx: 0, md: 2 },
            background: '#413F42',
          }}
        >
          <MenuSidebar
            selectedCategory2={selectedCategory2}
            setselectedCategory2={setselectedCategory2}
          />
          <Typography
            className='github'
            variant='body2'
            sx={{ mt: 1.5, color: '#fff' }}
          >
            @github/NCsaszar
          </Typography>
        </Box>
      </CSSTransition>
    </>
  );
};

export default Menus;
