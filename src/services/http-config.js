import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_URI//'http://129.151.120.50:8076'
});