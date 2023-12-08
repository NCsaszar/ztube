import { Stack, Box } from '@mui/material';
import { VideoCard, Loader } from '.';
import RecVideoCard from './RecVideoCard';

const Videos = ({ videos, direction, vidPage, recommended = false }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='flex-start' gap={2} py={3}>
      {videos.map((item, idx) => {
        return recommended ? (
          <Box key={idx}>{<RecVideoCard video={item} vidPage={vidPage} />}</Box>
        ) : (
          <Box key={idx}>{<VideoCard video={item} vidPage={vidPage} />}</Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
