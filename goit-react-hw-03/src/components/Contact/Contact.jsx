import style from './Contact.module.css'
import contactsgrup from "../../../contacts.json";

const Contact =({ name, number}) => {
return (
    <div>
    <li>
    <b>{name}</b>: {number}
    </li>
    <button type="submit" className={style.btn}>Delete</button>
</div>
);
};

export default  Contact;