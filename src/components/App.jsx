import { Container } from 'App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#fff',
            background: 'red',
          },
        }}
      />
    </Container>
  );
};

export default App;
