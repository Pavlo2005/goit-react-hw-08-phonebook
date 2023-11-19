import { ErrMessage, StyledForm } from 'components/PhoneForm/PhoneForm.styled';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';


const quizSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required!'),
    email: Yup.string().required('This field is required!'),
    pasword: Yup.string()
        .min(8, 'Min 8 mins')
        .max(16, 'Max 16 mins')
        .required('This field is required!'),
});

export default function LoginPage() {

    const onLogin = newLogin => {
        console.log(newLogin);
    };

    return (
        <div>
            <h2>Login</h2>

            <Formik
                initialValues={{
                    name: '',
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
                        Pasword
                        <Field type="pasword" name="pasword" />
                        <ErrMessage name="pasword" component="div" />
                    </label>
                    <button type="submit">Add contact</button>
                </StyledForm>
            </Formik>
        </div>
    );
}