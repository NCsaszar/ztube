import { Link } from 'react-router-dom';
import { Card, CardMedia } from '@mui/material';
import { useState } from 'react';
import RecVideoCardInfo from './RecVideoCardInfo';
const RecVideoCard = ({ video, vidPage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { video_id, title, thumbnails } = video;

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
      <Link to={video_id ? `/video/${video_id}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          component='img'
          image={thumbnails[1].url}
          alt={title}
          sx={{
            height: { xs: '100%', md: '180px' },
          }}
        />
      </Link>
      <RecVideoCardInfo isHovered={isHovered} video={video} videoId={video_id} />
    </Card>
  );
};

export default RecVideoCard;
