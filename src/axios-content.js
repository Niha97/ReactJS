import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-myblog.firebaseio.com/'

});

export default instance;