import { ErrMessage, StyledForm } from 'components/PhoneForm/PhoneForm.styled';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { UserRegister } from 'redux/operations';
import * as Yup from 'yup';

const quizSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required!'),
    email: Yup.string().required('This field is required!'),
    pasword: Yup.string()
        .min(8, 'Min 8 mins')
        .max(16, 'Max 16 mins')
        .required('This field is required!'),
});

export default function RegisterPage() {
    const dispatch = useDispatch();

    const onRegister = newRegister => {
        console.log(newRegister);
        dispatch(
            UserRegister({
                name: newRegister.name,
                email: newRegister.email,
                password: newRegister.pasword,
            })
        );
    };

    return (
        <div>
            <h2>Register</h2>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    pasword: '',
                }}
                validationSchema={quizSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    onRegister(values);
                    actions.resetForm();
                }}
            >
                <StyledForm>
                    <label>
                        Name
                        <Field name="name" />
                        <ErrMessage name="name" component="div" />
                    </label>
                    <label>
                        Email
                        <Field type="email" name="email" />
                        <ErrMessage name="email" component="div" />
                    </label>
                    <label>
                        Password
                        <Field type="password" name="pasword" />
                        <ErrMessage name="pasword" component="div" />
                    </label>
                    <button type="submit">Register</button>
                </StyledForm>
            </Formik>
        </div>
    );
}