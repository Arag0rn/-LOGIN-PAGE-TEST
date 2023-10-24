import { Form, ErrorMessage, Field  } from 'formik';
import styled from 'styled-components';




export const AddContContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export  const StyledForm = styled(Form)`
display: grid;
justify-items: center;
border-radius: 5px;
padding: 15px;
min-width: 320px;
gap: 8px;
background:linear-gradient(66deg, #e38010, #1535bf);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const ErMsg = styled(ErrorMessage )`
 font-size: 12px;  
color: #f1e8e8;
`

export const StyledField = styled(Field)`
border:none;
border-radius: 10px;
width: 70%;
height: 30px;
padding-left: 15px;
background-color: #ebe6df;

`

export const Styledlabel = styled.label`
font-weight: bold;
color: white;

`

export const FormBtnStyled = styled.button`
  display: inline-block;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 -1px rgba(0,0,0,.5);
  user-select: none;
  padding: .7em 1.5em;
  border-radius: 5px;
  outline: none;
  background: rgb(147,80,36) linear-gradient(rgb(106,58,26), rgb(147,80,36) 80%);
  box-shadow:
   0 6px rgb(86,38,6),
   0 3px 15px rgba(0,0,0,.4),
   inset 0 1px rgba(255,255,255,.3),
   inset 0 0 3px rgba(255,255,255,.5);
  transition: .2s;
&:hover {
  background: rgb(167,91,41) linear-gradient(rgb(126,69,31), rgb(167,91,41) 80%);
}
&:active {
  background: rgb(120,63,25) linear-gradient(rgb(120,63,25) 20%, rgb(167,91,41));
  box-shadow:
   0 2px rgb(86,38,6),
   0 1px 6px rgba(0,0,0,.4),
   inset 0 1px rgba(255,255,255,.3),
   inset 0 0 3px rgba(255,255,255,.5);
  -webkit-transform: translate(0, 4px);
  transform: translate(0, 4px);
}
`

// export const StyledDatePicker = styled(DatePicker)`
//   border:none;
//   border-radius: 10px;
//   width: 228px;
//   height: 30px;
//   padding-left: 15px;
//   background-color: #ebe6df;
// `;