import { Contact } from "../types/ContactType";

const STORAGE_KEY = "contacts";

export const getContactsFromStorage = (): Contact[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveContactsToStorage = (contacts: Contact[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};
