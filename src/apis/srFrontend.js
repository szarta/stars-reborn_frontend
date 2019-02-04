import axios from 'axios';

const srFrontend = axios.create({
    baseURL: 'http://localhost:8150'
});

export default srFrontend;
