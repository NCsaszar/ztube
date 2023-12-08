import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Videos } from './index.js';
import { fetchAPI } from '../utils/fetchAPI.js';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI('search', {
      q: searchTerm,
    }).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
