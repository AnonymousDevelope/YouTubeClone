import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
    limit: '50',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_ID,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const getDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
