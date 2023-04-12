// src/api/axiosInstance.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.100.65:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const get = async (endpoint, authToken) => {
  try {
    const response = await instance.get(endpoint, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

const post = async (endpoint, data, authToken) => {
    try {
      const response = await instance.post(endpoint, data, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error posting data to ${endpoint}:`, error);
      throw error;
    }
  };
  

export { instance, get, post };
