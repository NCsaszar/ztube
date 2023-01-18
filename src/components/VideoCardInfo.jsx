import { Typography, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants.js';
const VideoCardInfo = ({ videoId, snippet, isHovered }) => {
  const testStyle = {
    position: 'absolute',
    backgroundColor: '#1E1E1E',
    top: 100,
    left: 0,
    width: '100%',
    height: '100%',
  };
  if (!isHovered) {
    return null;
  }
  return (
    <CardContent sx={testStyle}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          variant='subtitle1'
          fontWeight='bold'
          color='#FFF'
          sx={{ fontSize: '10px' }}
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant='subtitle2' color='gray' sx={{ fontSize: '8px' }}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: '8px', color: 'gray', ml: '5px' }} />
        </Typography>
      </Link>
    </CardContent>
  );
};

export default VideoCardInfo;
