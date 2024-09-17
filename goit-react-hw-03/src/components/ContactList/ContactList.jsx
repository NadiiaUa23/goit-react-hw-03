// import style from './ContactList.module.css'
import Contact from '../Contact/Contact';
import DeleteContact from '../../../App'


const ContactList =({contacts})=>{

return (
    <div>
        <ul>
            {contacts.map(({ id, name, number })=>(
                 <Contact 
                 key={id} 
                 id={id} 
                 name={name} 
                 number={number} 
                 onDeleteContact={DeleteContact} // передаємо функцію видалення контакту
             />
            ))}
        </ul>
    </div>
    )
};

export default ContactList;

