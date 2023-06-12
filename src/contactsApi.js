import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6486fd74beba6297278f9ec4.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

console.log(await fetchContacts());
