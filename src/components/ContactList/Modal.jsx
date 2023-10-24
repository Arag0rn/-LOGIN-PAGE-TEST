import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ErMsg, FormBtnStyled, StyledField, StyledForm, Styledlabel } from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { editTable } from 'Redux/Table/operations';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  p: 4,
};

export default function BasicModal({ open, selectedTable, onClose }) {
;
  const dispatch = useDispatch(); 
  
  useEffect(() => {
   dispatch(editTable());
  }, [dispatch])
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedTable ? (
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Editing Contact
              </Typography>
      
              <Formik
      initialValues={{
        name: `${selectedTable.name}`,
        email: `${selectedTable.email}`,
        phone_number: `${selectedTable.phone_number}`,
        birthday_date: `${selectedTable.birthday_date}`,
        address: `${selectedTable.address}`,
      }}

      onSubmit={(values, action) => {
        const newContact = {
          id: selectedTable.id,
          name: values.name,
          phone_number: values.phone_number,
          email: values.email,
          birthday_date: values.birthday_date,
          address: values.address,
        };
        
         dispatch(editTable(newContact));
        action.resetForm();
        onClose();
      }
    }
    >
      <StyledForm>
      <Styledlabel htmlFor="name">Name</Styledlabel>
        <StyledField id="name" name="name" 
        placeholder="Jane" 
        />
        <ErMsg component="span" name="name" />

        <Styledlabel htmlFor="email">Email</Styledlabel>
        
        <StyledField id="email" 
            name="email"   
            email="email"
            placeholder="some@email.com"
    
         />
          <ErMsg component="span" name="email" />

          <Styledlabel htmlFor="birthday_date">Birthday Date</Styledlabel>

          <StyledField id="birthday_date" 
            name="birthday_date"   
            data="birthday_date"
            placeholder="1969-10-22"
    
         />
          <ErMsg component="span" name="email" />

          <Styledlabel htmlFor="phone_number">Number</Styledlabel>

          <StyledField id="phone_number" 
              name="phone_number"   
              type="tel"
              placeholder="555-55-55"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
            <ErMsg component="span" name="phone" />

            <Styledlabel htmlFor="phone_number">Address</Styledlabel>

            <StyledField id="address" 
                name="address"   
                type="tel"
                placeholder="132, My Street"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
              <ErMsg component="span" name="address" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
            </div>
          ) : (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              No contact selected
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}