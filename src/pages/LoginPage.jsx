import { ErrMessage, StyledForm } from 'components/PhoneForm/PhoneForm.styled';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import * as Yup from 'yup';


const quizSchema = Yup.object().shape({
    email: Yup.string().required('This field is required!'),
    pasword: Yup.string()
        .min(8, 'Min 8 mins')
        .max(16, 'Max 16 mins')
        .required('This field is required!'),
});

export default function LoginPage() {
    const dispatch = useDispatch();

    const onLogin = newLogin => {
        console.log(newLogin);
        dispatch(
            logIn({
                email: newLogin.email,
                password: newLogin.pasword,
            })
        );
    };

    return (
        <div>
            <h2>Login</h2>

            <Formik
                initialValues={{
                    email: '',
                    pasword: '',
                }}
                validationSchema={quizSchema}
                onSubmit={(values, actions) => {
                    onLogin(values);
                    actions.resetForm();
                }}
            >
                <StyledForm>
                    <label>
                        Email
                        <Field type="email" name="email" />
                        <ErrMessage name="email" component="div" />
                    </label>
                    <label>
                        Pasword
                        <Field type="password" name="pasword" />
                        <ErrMessage name="pasword" component="div" />
                    </label>
                    <button type="submit">Add contact</button>
                </StyledForm>
            </Formik>
        </div>
    );
}