import style from './Contact.module.css'
import contactsgrup from "../../../contacts.json";

const Contact =({ id, name, number, onDeleteContact}) => {
return (
    <div  className={style.contactItem}>

        <li className={style.etm}>
    <span className={style.contactName}>{name}</span> 
    <span className={style.contactNumber}>{number}</span>
<button type="submit" className={style.btn}onClick={() => onDeleteContact(id)}>Delete</button>  
        </li>  
        
    </div>

);
};

export default  Contact;