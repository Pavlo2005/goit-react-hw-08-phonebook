import { ErrMessage, IconAt, IconUnlock, StyledField, StyledForm, StyledLabel, SubmitButton } from 'components/PhoneForm/PhoneForm.styled';
import { Formik } from 'formik';
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

export const LoginForm = () => { 
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
                    <StyledLabel>
                        Email
                        <IconAt/>
                        <StyledField type="email" name="email" />
                        <ErrMessage name="email" component="div" />
                    </StyledLabel>
                    <StyledLabel>
                        Password
                        <IconUnlock/>
                        <StyledField type="password" name="pasword" />
                        <ErrMessage name="pasword" component="div" />
                    </StyledLabel>
                    <SubmitButton type="submit">Log in</SubmitButton>
                </StyledForm>
            </Formik>
        </div>
    );
}
