import { useState } from "react";
import allPhone from "./phonebook.json";
import ContactList from "./src/components/ContactList/ContactList";




const App = () => {
    const [phone, setPhone] =useState([allPhone])

    return (
<div>
  <h1 >Phonebook</h1>
  {/* <ContactForm />
  <SearchBox />
   */}
   <ContactList phone={phone}/>
</div>

    );
};



export default App;