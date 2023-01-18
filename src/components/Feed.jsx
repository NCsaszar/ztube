import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { Videos } from './';
import { fetchAPI } from '../utils/fetchAPI.js';
import Menus from './Menus';

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
      <Menus
        openMenu={openMenu}
        openMenu2={openMenu2}
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
        selectedCategory2={selectedCategory2}
        setselectedCategory2={setselectedCategory2}
      />
      <Box
        p={7}
        sx={{
          overflowY: 'auto',
          height: '90vh',
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
