import axios from 'axios';

export default axios.create({
  baseURL: `http://192.168.1.19:8080/exist/restxq`,
  headers: {'Content-Type': 'application/xml'}
});
