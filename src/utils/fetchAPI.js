import axios from 'axios';
const rapidAPIKey = import.meta.env.VITE_X_RapidAPI_Key;
const rapidAPIHost = import.meta.env.VITE_X_RapidAPI_Host;

const rapidAPIKeyRelated = import.meta.env.VITE_X2_RapidAPI_Key;
const rapidAPIHostRelated = import.meta.env.VITE_X2_RapidAPI_Host;

const API_URL = 'https://youtube-v311.p.rapidapi.com';

export const fetchAPI = async (endpoint, queryParams = {}) => {
  const options = {
    method: 'GET',
    url: `${API_URL}/${endpoint}/`,
    params: {
      part: 'snippet,id', // Default parameters
      maxResults: '50',
      regionCode: 'US',
      ...queryParams, // Merge in any additional query parameters
    },
    headers: {
      'X-RapidAPI-Key': rapidAPIKey,
      'X-RapidAPI-Host': rapidAPIHost,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchRelatedAPI = async (id) => {
  console.log(id);
  const options = {
    method: 'GET',
    url: 'https://youtube-v2.p.rapidapi.com/video/recommendations',
    params: {
      video_id: id,
    },
    headers: {
      'X-RapidAPI-Key': rapidAPIKeyRelated,
      'X-RapidAPI-Host': rapidAPIHostRelated,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
