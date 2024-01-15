import axios from 'axios';
const baseUrl = 'http://localhost:3001/books';

const getAll = () => {
     const request = axios.get(baseUrl);
     return request.then(response => response.data);
}

const create = newBook => {
    const request = axios.post(baseUrl, newBook);
    return request.then(response => response.data);

}

const update = (id,newBook) => {
    const request = axios.put(`${baseUrl}/${id}`, newBook);
    return request.then(response => response.data);
}

export default { getAll, create, update }
