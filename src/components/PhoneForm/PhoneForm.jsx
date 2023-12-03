import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, IconPhone, IconUser, StyledField, StyledForm, StyledLabel, SubmitButton } from './PhoneForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { valueContacts } from 'redux/selectors';
import { addContacts } from 'redux/contacts';
import toast from 'react-hot-toast';

const quizSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required!'),
    number: Yup.string()
        .min(8, 'Min 8 mins')
        .max(16, 'Max 16 mins')
        .required('This field is required!'),
});

export const PhoneForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(valueContacts)

    const onAddPhone = newPhone => {
        if (contacts.find(contact => contact.name === newPhone.name)) {
            toast.error(`${newPhone.name} is Olredy in contacts`)
        }
        else {
            toast.promise(
                dispatch(addContacts({ ...newPhone, id: nanoid() })),
                {
                    loading: 'Saving...',
                    success: <b>Phone saved!</b>,
                    error: <b>Phone could not save</b>,
                }
            );
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>

            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={quizSchema}
                onSubmit={(values, actions) => {
                    onAddPhone(values);
                    actions.resetForm();
                }}
            >
                <StyledForm>
                    <StyledLabel>
                        Name
                        <IconUser/>
                        <StyledField name="name"/>
                        <ErrMessage name="name" component="div" />
                    </StyledLabel>
                    <StyledLabel>
                        Number
                        <IconPhone/>
                        <StyledField type="numer" name="number" />
                        <ErrMessage name="number" component="div" />
                    </StyledLabel>
                    <SubmitButton type="submit">Add contact</SubmitButton>
                </StyledForm>
            </Formik>
        </div>
    );
};