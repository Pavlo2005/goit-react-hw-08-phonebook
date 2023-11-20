import { Contacts } from "components/Contacts/Contacts";
import { PhoneForm } from "components/PhoneForm/PhoneForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts";

export default function ContactsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <PhoneForm />
            <Contacts></Contacts>
        </div>
    );
}