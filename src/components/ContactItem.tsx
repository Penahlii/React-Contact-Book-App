import React, { useState } from "react";
import { Contact } from "../types/ContactType";
import EditContact from "./EditContact";
import { ItemContainer, Button } from "../styles/ContactItemStyles";

interface Props {
  contact: Contact;
  onDelete: (id: string) => void;
  onEdit: (contact: Contact) => void;
}

const ContactItem: React.FC<Props> = ({ contact, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedContact: Contact) => {
    onEdit(updatedContact);
    setIsEditing(false);
  };

  return (
    <ItemContainer>
      {isEditing ? (
        <EditContact contact={contact} onEdit={handleEdit} />
      ) : (
        <>
          <div>
            {contact.firstName} {contact.lastName}
          </div>
          <div>{contact.phone}</div>
          <div>{contact.email}</div>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button onClick={() => onDelete(contact.id)}>Delete</Button>
        </>
      )}
    </ItemContainer>
  );
};

export default ContactItem;
