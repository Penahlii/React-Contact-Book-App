import React, { useState } from "react";
import { Contact } from "../types/ContactType";
import ContactItem from "./ContactItem";
import {
  ListContainer,
  Pagination,
  FilterInput,
} from "../styles/ContactListStyles";

interface Props {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onEdit: (contact: Contact) => void;
}

const ContactList: React.FC<Props> = ({ contacts, onDelete, onEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const contactsPerPage = 5;

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(filter.toLowerCase()) ||
      contact.phone.includes(filter) ||
      contact.email.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <ListContainer>
      <FilterInput
        type="text"
        placeholder="Filter contacts..."
        value={filter}
        onChange={handleFilterChange}
      />
      {currentContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
      <Pagination>
        {Array.from(
          { length: Math.ceil(filteredContacts.length / contactsPerPage) },
          (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </Pagination>
    </ListContainer>
  );
};

export default ContactList;
