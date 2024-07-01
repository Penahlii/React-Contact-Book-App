import React, { useState } from "react";
import { Contact } from "../types/ContactType";
import { EditContactForm, Input, Button } from "../styles/EditContactStyles";

interface Props {
  contact: Contact;
  onEdit: (contact: Contact) => void;
}

const EditContact: React.FC<Props> = ({ contact, onEdit }) => {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedContact: Contact = {
      ...contact,
      firstName,
      lastName,
      phone,
      email,
    };
    onEdit(updatedContact);
  };

  return (
    <EditContactForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <Input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <Input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Save</Button>
    </EditContactForm>
  );
};

export default EditContact;
