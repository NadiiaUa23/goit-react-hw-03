import style from './ContactList.module.css'
import Contact from '../Contact/Contact';



const ContactList =({contacts})=>{

return (
    <div>
        <ul>
            {contacts.map(({ id, name, number })=>(
                <Contact key={id} name={name} number={number} />
            ))}
        </ul>
    </div>
    )
};

export default ContactList;

