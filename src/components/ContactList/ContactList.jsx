import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactList,
  StyledContactItem,
  StyledName,
  StyledNumber,
} from './ContactList.styled';

import { selectContacts, selectFilter } from 'redux/contactsSelectors';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contacts/thunks';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleDeleteContact = async contactId => {
    try {
      dispatch(deleteContactThunk(contactId));
    } catch (error) {
      console.log('Error deleting contact:', error);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const renderedContacts = filter ? filteredContacts : contacts;

  return (
    <StyledContactList>
      {renderedContacts.map(({ id, name, phone }) => (
        <StyledContactItem key={id}>
          <StyledName>{name}</StyledName> <StyledNumber>{phone}</StyledNumber>
          <button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};

export default ContactList;
