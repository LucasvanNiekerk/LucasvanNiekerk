import axios from 'axios';

//Create the baseURL for the api for easier use
export default axios.create({
    baseURL: 'https://www.reddit.com/'
});

