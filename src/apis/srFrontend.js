import axios from 'axios';

const srFrontend = axios.create({
    baseURL: 'http://10.0.50.56:8150'
});

export default srFrontend;
