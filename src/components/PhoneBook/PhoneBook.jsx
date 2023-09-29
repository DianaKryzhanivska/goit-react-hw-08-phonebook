import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactForm/selectors';
import { Container, Info, MainTitle, SubTitle } from './PhoneBook.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const PhoneBook = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Container>
        <MainTitle>Phonebook</MainTitle>

        <ContactForm />

        <SubTitle>Contacts</SubTitle>
        {contacts?.length > 0 ? (
          <Filter />
        ) : (
          <Info>There are no contacts in your phonebook.</Info>
        )}

        <ContactList />
      </Container>
    </>
  );
};
