import ContactItem from 'components/ContactItem';
import Notification from 'components/Notification';
import { AllContacts, ListContacts } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';

const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter.value);

  const getfilteredContacts = () =>
    data &&
    data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = getfilteredContacts();

  return (
    <ListContacts>
      {contacts && <AllContacts>All Contacts : {contacts.length}</AllContacts>}
      {!isLoading && data && contacts.length > 0 ? (
        contacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            id={id}
            data={contacts}
            name={name}
            phone={phone}
          />
        ))
      ) : (
        <Notification message="No contacts" />
      )}
    </ListContacts>
  );
};

export default ContactList;
