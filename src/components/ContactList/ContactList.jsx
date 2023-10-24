import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledUl, NumberStyled, ListContContainer, ContactCard, Name, DeletBtn, Email, ButtonBox } from "./ContactList.styled";
import BasicModal from "./Modal";
import { deleteFetchedTable, fetchTable } from "Redux/Table/operations";
import { selectTable } from "Redux/Table/selectors";

export const ContactList = () => {
  const dispatch = useDispatch();
  const table = useSelector(selectTable)
  const [open, setOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
 

  const openModal = (contact) => {
    setSelectedTable(contact); 
    setOpen(true);
  };

  useEffect(() => {
     dispatch(fetchTable());
  }, [dispatch]);

  return (
    <ListContContainer>
      <BasicModal open={open} selectedTable={selectedTable} onClose={() => setOpen(false)} />
      {!open && (
        <StyledUl>
          {table.map(({ name, id, email, phone_number, address, birthday_date }) => (
            <ContactCard key={id}>
              <Name>Name: {name} </Name> 
              <Email> Email: {email}</Email> 
              <NumberStyled>Birthday Data: {birthday_date}</NumberStyled>
              <NumberStyled>Phone Number: {phone_number}</NumberStyled>
              <NumberStyled>Address: {address}</NumberStyled>
               <ButtonBox>
               <DeletBtn  onClick={() => openModal({ name, id, email, phone_number, address, birthday_date })}>Edit</DeletBtn> 
               <DeletBtn onClick={() => dispatch(deleteFetchedTable(id))}>Delete</DeletBtn> 
               </ButtonBox>
            </ContactCard>
          ))}
        </StyledUl>
      )}
    </ListContContainer>
  )
};