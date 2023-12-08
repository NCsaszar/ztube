import { Link } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { StyledRoot, StyledInfoBox, StyledDescriptionBox } from './styles/VideoInfoStyles';

const VideoInfo = ({ videoDetail }) => {
  if (!videoDetail) return null;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <StyledRoot>
      <StyledInfoBox>
        <Stack direction='column' justifyContent='space-between'>
          <Typography color='#fff' variant='h5' fontWeight='bold'>
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1}>
            <Link to={`/channel/${channelId}`}>
              <Typography
                sx={{
                  color: '#fff',
                  typography: {
                    sm: 'subtitle1',
                    md: 'h6',
                  },
                }}
              >
                {channelTitle}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Typography>
            </Link>
          </Stack>
        </Stack>
        <Stack direction='row' gap='20px' alignItems='center' paddingRight='50px' color='white'>
          <Typography variant='body1' sx={{ opacity: 0.7 }}>
            {parseInt(viewCount).toLocaleString()} views
          </Typography>
          <Typography variant='body1' sx={{ opacity: 0.7 }}>
            {parseInt(likeCount).toLocaleString()} likes
          </Typography>
        </Stack>
      </StyledInfoBox>
      <StyledDescriptionBox>
        <Typography variant='body1' color='white' sx={{ opacity: 0.7, whiteSpace: 'pre-wrap' }}>
          {description || 'No description available'}
        </Typography>
      </StyledDescriptionBox>
    </StyledRoot>
  );
};

export default VideoInfo;
