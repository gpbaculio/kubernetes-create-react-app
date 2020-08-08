import axios from 'axios';

const buildClient = () => {
  return axios.create({
    baseUrl: '/',
  });
};

export default buildClient;
