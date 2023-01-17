import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard, Loader } from './';
import { fetchAPI } from '../utils/fetchAPI.js';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [banner, setBanner] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchAPI(`search?channelId=${id}&&part=snippet&order=date`).then((data) => {
      setVideos(data?.items);
    });
    fetchAPI(`channels?part=snippet,statistics&id=${id}`).then((data) => {
      setBanner(data?.items[0].brandingSettings.image.bannerExternalUrl);
    });
  }, [id]);

  if (!banner) return <Loader />;
  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            width: '50%',
            display: 'block',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              zIndex: 10,
              height: '300px',
            }}
          />
        </div>
        {/* <img
          style={{
            zIndex: 1,
            height: '300px',
            // width: '80%',
            left: '10%',
            position: 'relative',
          }}
          alt={banner}
          src={banner}
        /> */}
        <ChannelCard channelDetail={channelDetail} marginTop={'-93px'} />
        <Box display='flex' p='2'>
          <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
