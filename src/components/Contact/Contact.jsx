import css from "./Contact.module.css"
import { IoPerson } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";



export default function Contact({ id, name, phone }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
        <div className={css.contact}>
            <div>
            <p><IoPerson />{name}</p>
            <p><MdLocalPhone />
{phone}</p></div>
            <button className={css.btn} onClick={handleDelete}>Delete</button>
        </div>
    )
}