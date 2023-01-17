import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from './components/';
import { useState } from 'react';

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#7F8487' }}>
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <Routes>
          <Route path='/' exact element={<Feed openMenu={openMenu} />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
