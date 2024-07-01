import React, { useState } from "react";
import { Contact } from "../types/ContactType";
import { saveContactsToStorage } from "../utils/storage";
import { getContactsFromStorage } from "../utils/storage";
import { AddContactForm, Input, Button } from "../styles/AddContactStyles";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onAdd: (contact: Contact) => void;
}

const AddContact: React.FC<Props> = ({ onAdd }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: uuidv4(),
      firstName,
      lastName,
      phone,
      email,
    };
    onAdd(newContact);
    saveContactsToStorage([...getContactsFromStorage(), newContact]);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  };

  return (
    <AddContactForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Add Contact</Button>
    </AddContactForm>
  );
};

export default AddContact;
