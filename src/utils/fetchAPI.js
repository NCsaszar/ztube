import axios from 'axios';
const rapidAPIKey = import.meta.env.VITE_X_RapidAPI_Key;
const rapidAPIHost = import.meta.env.VITE_X_RapidAPI_Host;

const API_URL = 'https://youtube-v311.p.rapidapi.com';
const options = {
  url: API_URL,
  params: { maxResults: '50', part: 'snippet,id', regionCode: 'US' },
  headers: {
    'X-RapidAPI-Key': rapidAPIKey,
    'X-RapidAPI-Host': rapidAPIHost,
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${API_URL}/${url}`, options);
  return data;
};
