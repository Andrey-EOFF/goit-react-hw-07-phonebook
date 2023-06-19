import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactList,
  StyledContactItem,
  StyledName,
  StyledNumber,
} from './ContactList.styled';

import { selectContacts } from 'redux/contactsSelectors';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contacts/thunks';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <StyledContactList>
      {contacts.map(({ id, name, phone }) => (
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
