import axios from 'axios';

const buildClient = () => axios.create({ baseUrl: '/' });

export default buildClient;
