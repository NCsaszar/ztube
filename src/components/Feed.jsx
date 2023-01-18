import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos, MenuSidebar } from './';
import { fetchAPI } from '../utils/fetchAPI.js';
import { CSSTransition } from 'react-transition-group';

const Feed = ({ openMenu, openMenu2 }) => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [selectedCategory2, setselectedCategory2] = useState('History');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
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
      <Box
        p={7}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          position: 'relative',
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
