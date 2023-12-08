import { Box } from '@mui/material';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoId }) => {
  return (
    <Box
      sx={{
        overflow: 'hidden', // This will contain the video within the rounded corners
        borderRadius: '20px', // This is the border radius you want
      }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        className='react-player'
        width='100%'
        height='100%'
        controls
        muted={true}
      />
    </Box>
  );
};

export default VideoPlayer;
