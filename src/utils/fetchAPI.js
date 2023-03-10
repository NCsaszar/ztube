import axios from 'axios';

const API_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  url: API_URL,
  params: { maxResults: '50', part: 'snippet,id', regionCode: 'US' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${API_URL}/${url}`, options);
  return data;
};
