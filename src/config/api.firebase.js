import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL:
    'https://todo-r-c17-id-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default apiFirebase;
