import axios from 'axios';

axios.defaults.baseURL = 'https://648ad15117f1536d65e9be75.mockapi.io/';

export const fetchContactsAPI = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    throw e.message;
  }
};

export const saveContactAPI = async contact => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    throw new Error('Failed to save contact');
  }
};

export const deleteContactAPI = async contactId => {
  try {
    await axios.delete(`/contacts/${contactId}`);
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
};


