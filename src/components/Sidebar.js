import React from 'react';

const contacts = [
  { id: 1, name: 'Atishrey' },
  { id: 2, name: 'Yuvraj' },
  { id: 3, name: 'Albert' }
];

const Sidebar = ({ onSelectContact }) => {
  return (
    <div className="sidebar">
      <h3>Contacts</h3>
      {contacts.map(contact => (
        <div
          key={contact.id}
          className="contact"
          onClick={() => onSelectContact(contact)}
        >
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
