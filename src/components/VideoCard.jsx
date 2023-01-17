import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants.js';
import { useState } from 'react';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  vidPage,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardContentStyles = {
    backgroundColor: '#1E1E1E',
    height: { xs: '50px', sm: '230px', md: '100px' },
    width: { xs: '100%', sm: '358px' },
  };

  return (
    <Card
      sx={{
        borderRadius: 5,
        display: 'flex',
        direction: 'column',
        transition: 'transform 0.2s',
        ':hover': {
          transform: 'scale(1.2)',
        },
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
          <CardMedia
            component='img'
            image={snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{
              height: { xs: '100%', md: '180px' },
            }}
          />
        </Link>
        {isHovered && !vidPage ? (
          <CardContent sx={cardContentStyles}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              </Typography>
            </Link>
            <Link
              to={
                snippet?.channelId
                  ? `/channel/${snippet?.channelId}`
                  : demoChannelUrl
              }
            >
              <Typography variant='subtitle2' color='gray'>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle
                  sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                />
              </Typography>
            </Link>
          </CardContent>
        ) : null}
      </Box>
    </Card>
  );
};

export default VideoCard;
