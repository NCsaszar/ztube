import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import { useState } from 'react';

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#272628' }}>
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} setOpenMenu2={setOpenMenu2} openMenu2={openMenu2} />
        <Routes>
          <Route path='/' exact element={<Feed openMenu={openMenu} openMenu2={openMenu2} />} />
          <Route path='/video/:id' element={<VideoDetail openMenu={openMenu} openMenu2={openMenu2} />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
