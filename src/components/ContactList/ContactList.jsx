import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactList,
  StyledContactItem,
  StyledName,
  StyledNumber,
} from './ContactList.styled';
import {
  deleteContact,
  selectContacts,
  fetchContacts,
} from 'redux/contactsSlice';

const ContactList = ({ onDeleteContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    onDeleteContact(contactId);
  };

  return (
    <StyledContactList>
      {contacts.map(({ id, name, number }) => (
        <StyledContactItem key={id}>
          <StyledName>{name}</StyledName> <StyledNumber>{number}</StyledNumber>
          <button onClick={() => handleDeleteContact(id)}>Delete</button>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};

export default ContactList;
