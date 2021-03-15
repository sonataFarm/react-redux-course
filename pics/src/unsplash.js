import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID oJUwn4KoZ_7_uNoKpYhUWHef9fP6NFtlks5E-Ho_1T4'
  }
});
