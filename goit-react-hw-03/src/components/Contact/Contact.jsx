import style from './Contact.module.css'


const Contact =({ name, number}) => {
return (
    <div>
    <li>
    <p>{name}</p>
        <p>{number}</p>
    </li>
    <button type="submit" className={style.btn}>Delete</button>
</div>
);
};

export default  Contact;