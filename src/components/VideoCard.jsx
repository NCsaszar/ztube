import { Link } from 'react-router-dom';
import { Card, CardMedia } from '@mui/material';
import { useState } from 'react';
import { default as VideoCardInfo } from './VideoCardInfo';
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  vidPage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        // position: 'relative',
        borderRadius: !isHovered ? 5 : 2,
        display: 'flex',
        direction: 'column',
        transition: 'transform 0.2s',
        ':hover': {
          transform: 'scale(1.3)',
        },
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          component='img'
          image={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          sx={{
            height: { xs: '100%', md: '180px' },
          }}
        />
      </Link>
      <VideoCardInfo
        isHovered={isHovered}
        snippet={snippet}
        videoId={videoId}
      />
    </Card>
  );
};

export default VideoCard;
