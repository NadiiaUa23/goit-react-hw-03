import { useState } from "react";
import contactsgrup from "./contacts.json";
import ContactList from "./src/components/ContactList/ContactList";
import SearchBox from "./src/components/SearchBox/SearchBox";
import ContactForm from "./src/components/ContactForm/ContactForm";

const App = () => {
    const [contacts, setContacts] = useState(contactsgrup) // початковий масив контактів
    const [filter, setFilter] = useState(''); // стан для фільтру

    const addContact = (newContact) => {
        // Перевіряємо, чи контакт з таким іменем вже існує
        if (contacts.some(contact => contact.name === newContact.name)) {
          alert(`${newContact.name} is already in contacts.`);
          return;
        }
        setContacts(prevContacts => [...prevContacts, newContact]);
    };

//Ця функція оновлює стан filter кожного разу, коли користувач вводить текст у пошукове поле. event.target.value — це нове значення, яке ввів користувач.
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
      };

    const getFilteredContacts = () => {
        //Спочатку фільтр перетворюється на нижній регістр (toLowerCase()), щоб зробити пошук нечутливим до регістр
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };

      //Ця змінна зберігає результат фільтрації, тобто список контактів, що відповідають пошуковому запиту.
      const visibleContacts = getFilteredContacts();

    return (
<div>
    <h1 >Phonebook</h1>
    <ContactForm onSubmit={addContact} />
    <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={visibleContacts} />
</div>
    );
};



export default App;