import axios from 'axios';

const KEY = 'AIzaSyA8OKRXMyHgw9vz2OsOAGhNrir0vIgiOwE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});

