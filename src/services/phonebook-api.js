import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function createUser(name, email, password) {
  const user = {
    name,
    email,
    password,
  };
  console.log(user);
  const response = await axios.post('/users/signup', user);
  // console.log(response);
  token.set(response.data.token);
  return response.data;
}

export async function loginUser(email, password) {
  const user = {
    email,
    password,
  };
  console.log(user);
  const response = await axios.post('/users/login', user);
  // console.log(response);
  token.set(response.data.token);
  return response.data;
}

export async function logoutUser() {
  const response = await axios.post('/users/logout');
  // console.log(response);
  token.unset();
  return response.data;
}

export async function fetchCurrentUser() {
  const response = await axios.get('/users/current');
  // console.log(response);
  return response.data;
}

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  // console.log(response);
  return response.data;
}

export async function addContact(name, number) {
  const contact = {
    name,
    number,
  };

  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
