import style from './Contact.module.css'
import contactsgrup from "../../../contacts.json";

const Contact =({ name, number}) => {
return (
    <div  className={style.contactItem}>

    <li className={style.etm}>
    <span className={style.contactName}>{name}</span> 
    <span className={style.contactNumber}>{number}</span>

</li>  
<button type="submit" className={style.btn}>Delete</button>  
 
    


    </div>

);
};

export default  Contact;