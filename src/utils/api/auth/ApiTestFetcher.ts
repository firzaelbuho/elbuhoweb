// utils/api.js
import axios from 'axios';

export const ApiTestFetcher = async (username:string) => {
  try {
    const response = await axios.get(`https://elbuho.my.id/api/users/check-username-availability/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching username availability:', error);
    throw error;
  }
};
