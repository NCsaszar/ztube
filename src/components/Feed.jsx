import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchAPI } from '../utils/fetchAPI.js';
import { CSSTransition } from 'react-transition-group';

const Feed = ({ openMenu }) => {
  const [selectedCategory, setselectedCategory] = useState('New');
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
      <Box p={7} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
