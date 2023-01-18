import { Stack, Box } from '@mui/material';
import { VideoCard, Loader } from './';

const Videos = ({ videos, direction, vidPage }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='flex-start'
      gap={2}
      py={3}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} vidPage={vidPage} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
