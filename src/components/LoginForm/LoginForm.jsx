import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContainer, StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from 'Redux/Auth/operation';
import { useState } from 'react';


const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Required')
  .min(5, 'Too Short!')
    .max(50, 'Too Long!'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter')
    .required('Required'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
    <img src="./iconeye.png" width={15} alt="Show Password" />
      <FormContainer>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, action) => {
            action.resetForm();
            dispatch(logIn({
              username: values.username,
              password: values.password,
            }));
          }}
        >
          <StyledForm>
            <Styledlabel htmlFor="username">Username</Styledlabel>
            <StyledField
              id="username"
              name="username"
              placeholder="username"
            />
            <ErMsg component="span" name="username" />

            <Styledlabel htmlFor="password">Password</Styledlabel>
            <StyledField
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'} 
              placeholder="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? (
                     <img src="./hidepas.png" alt="Hide Password" />
                  ) : (
                    <img src="./iconeye.png" width={15} alt="Show Password" />
                  )}
            </button>
            <ErMsg component="span" name="password" />
            <FormBtnStyled type="submit">Submit</FormBtnStyled>
          </StyledForm>
        </Formik>
      </FormContainer>
      <ToastContainer />
    </>
  );
};