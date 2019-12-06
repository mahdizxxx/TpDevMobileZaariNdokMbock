import axios from 'axios';

const key = 'f4e6f1a35947495e90e201514f00b583';
const url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${key}`;

class NewsService {

    getNews() {
        return axios.get(`${url}`);
    }
}

export default NewsService;