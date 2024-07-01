import React, { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { Contact } from "./types/ContactType";
import { getContactsFromStorage, saveContactsToStorage } from "./utils/storage";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
`;

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(getContactsFromStorage());
  }, []);

  const handleAddContact = (contact: Contact) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    saveContactsToStorage(updatedContacts);
  };

  const handleDeleteContact = (id: string) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    saveContactsToStorage(updatedContacts);
  };

  const handleEditContact = (updatedContact: Contact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    saveContactsToStorage(updatedContacts);
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header>Contact Book</Header>
      <AddContact onAdd={handleAddContact} />
      <ContactList
        contacts={contacts}
        onDelete={handleDeleteContact}
        onEdit={handleEditContact}
      />
    </AppContainer>
  );
};

export default App;
