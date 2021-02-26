import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'

  });

  export const noorsoftInstance = axios.create({
	  baseURL : "http://178.128.196.163:3000/api/records"
  })