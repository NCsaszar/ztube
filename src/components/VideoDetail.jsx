import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Menus from './Menus.jsx';
import { Videos, Loader } from './index.js';
import { fetchAPI } from '../utils/fetchAPI.js';

const VideoDetail = ({ openMenu, openMenu2 }) => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [selectedCategory2, setselectedCategory2] = useState('History');
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack
        sx={{
          position: 'fixed',
          zIndex: 1000,
          flexDirection: { sx: 'column', md: 'row' },
        }}
      >
        <Menus
          openMenu={openMenu}
          openMenu2={openMenu2}
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
          selectedCategory2={selectedCategory2}
          setselectedCategory2={setselectedCategory2}
        />
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px', px: '10px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Box
              sx={{
                backgroundColor: '#272628',
                width: { md: '95%', xs: 'auto' },
                height: { md: '130px' },
              }}
            >
              <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                {title}
              </Typography>
              <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box px={5} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center' borderLeft='2px solid #272628'>
          <Videos videos={videos} direction='column' vidPage={true} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
