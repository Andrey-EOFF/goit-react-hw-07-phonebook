import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactList,
  StyledContactItem,
  StyledName,
  StyledNumber,
} from './ContactList.styled';

import * as contactsOperation from 'redux/contacts/contactsOperation';
import { selectContacts } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  // const handleDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  //   onDeleteContact(contactId);
  // };

  return (
    <StyledContactList>
      {contacts.map(({ id, name, phone }) => (
        <StyledContactItem key={id}>
          <StyledName>{name}</StyledName> <StyledNumber>{phone}</StyledNumber>
          {/* <button onClick={() => handleDeleteContact(id)}>Delete</button> */}
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};

export default ContactList;
