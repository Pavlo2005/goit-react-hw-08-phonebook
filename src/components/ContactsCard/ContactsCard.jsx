import { deleteContacts } from "redux/contacts";
import { DeleteButton, Container } from "./ContactsCard.styled";
import { useDispatch } from "react-redux";
import { FaPhone } from "react-icons/fa";

export const ContactsCard = (
    { contact: {
        id,
        name,
        number
    } }
) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <FaPhone/>
            <p>{`${name}: +${number}`}</p>
            <DeleteButton onClick={() => {
                dispatch(deleteContacts(id))
            }}>Delete</DeleteButton>
        </Container>
    );
}