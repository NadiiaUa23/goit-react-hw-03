import { useState } from "react";
import contactsgrup from "./contacts.json";
import ContactList from "./src/components/ContactList/ContactList";




const App = () => {
    const [contacts, setPhone] = useState(contactsgrup)

    return (
<div>
    <h1 >Phonebook</h1>
    <ContactList contacts={contacts} />
</div>
    );
};



export default App;