import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Label, Button } from './ContactForm.styled';
import { selectContacts } from 'redux/contactsSelectors';
import { addContactThunk } from 'redux/contacts/thunks';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setPhone(value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const isNameAlreadyExist = contacts.some(contact => contact.name === name);
    const isPhoneAlreadyExist = contacts.some(
      contact => contact.phone === phone
    );

    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts!`);
      return;
    }
    if (isPhoneAlreadyExist) {
      alert(`${phone} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      phone,
    };
    try {
      dispatch(addContactThunk(newContact));
      reset();
    } catch (error) {
      console.log('Error creating contact:', error);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="nameInputId">
        Name
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          id="nameInputId"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label htmlFor="numberInputId">
        Number
        <input
          onChange={handleChange}
          value={phone}
          type="tel"
          name="number"
          id="numberInputId"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
