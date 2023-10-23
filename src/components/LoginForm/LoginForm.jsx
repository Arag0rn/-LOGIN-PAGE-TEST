import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContainer, StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled} from './LoginForm.styled';
import { useDispatch } from 'react-redux';

import { logIn } from 'Redux/Auth/operation';


const SignupSchema = Yup.object().shape({
  // email: Yup.string()
  // .email('Invalid email address')
  // .required('Required'),
password: Yup.string()
  .min(5, 'Too Short!')
  .max(50, 'Too Long!')
  .matches(/[a-zA-Z]/, 'Must contain at least one letter')
  .required('Required'),
});


export const LoginForm  = ( ) =>{
  const dispatch = useDispatch();
    return <>
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
      }
    }
    >
      <StyledForm>
        <Styledlabel htmlFor="username">Username</Styledlabel>
        <StyledField id="username" name="username" 
        placeholder="username" 
        />
        <ErMsg component="span" name="username" />

        <Styledlabel htmlFor="password">Password</Styledlabel>
        <StyledField id="password" 
            name="password"   
            type="password"
            placeholder="password" 
            title="password number must be digits and can contain spaces, dashes, parentheses and can start with +"
         />
          <ErMsg component="span" name="password" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
         
        </FormContainer>
       </>

  
}