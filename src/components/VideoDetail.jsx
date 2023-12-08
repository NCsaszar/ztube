import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Menus from './Menus.jsx';
import { Loader, Videos } from './index.js';
import VideoPlayer from './VideoPlayer.jsx'; // New sub-component
import VideoInfo from './VideoInfo.jsx'; // New sub-component
import { useVideoData } from '../hooks/useVideoData.js'; // Custom hook for data fetching

const VideoDetail = ({ openMenu, openMenu2 }) => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [selectedCategory2, setselectedCategory2] = useState('History');
  const { id } = useParams();
  const { videoDetail, videos, loading } = useVideoData(id);

  if (loading) return <Loader />;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={0}>
        <Menus
          openMenu={openMenu}
          openMenu2={openMenu2}
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
          selectedCategory2={selectedCategory2}
          setselectedCategory2={setselectedCategory2}
        />
        <Box sx={{ py: '20px', px: '20px', width: '100%', display: 'flex' }}>
          <Box
            flex={1}
            sx={{
              maxWidth: '75%',
            }}
          >
            <VideoPlayer videoId={id} />
            <VideoInfo videoDetail={videoDetail} />
          </Box>
          <Box px={8} py={{ md: 1, xs: 5, overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
            <Videos videos={videos} direction='column' vidPage={true} recommended={true} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
