import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  GlobalStyle,
  MainTitle,
  ContactsTitle,
  WarningMessage,
} from './GlobalStyles';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';


export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div
      style={{
        width: '500px',
        padding: '20px',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        border: '2px solid #082911',
        borderRadius: '4px',
        backgroundColor: '#f1c40f0d',
      }}
    >
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
      </div>
      <ContactsTitle> Contacts</ContactsTitle>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <WarningMessage>
          Looks like you don`t have any contacts yet or just clear them all.
          Please add new contact.
        </WarningMessage>
      )}

      <GlobalStyle />
      <ToastContainer autoClose={5000} />
    </div>
  );
};
