import { Item, Contact, Button, ContactSpan } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    await deleteContact(id).unwrap();
  };
  return (
    <Item key={id}>
      <Contact>
        <ContactSpan>{name}</ContactSpan>
        <ContactSpan>{phone}</ContactSpan>
      </Contact>
      <Button type="submit" onClick={() => handleDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
