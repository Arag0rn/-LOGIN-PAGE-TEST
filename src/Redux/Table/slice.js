import { createSlice } from '@reduxjs/toolkit';
import { addTable, deleteFetchedTable, editTable, fetchTable } from './operations';

const initialState = {
    name: '',
    email: '',
    birthday_date: '',
    phone_number: '',
    address: '',
    table: []
  }

  const setError = (state, {payload}) => {
    state.status = 'rejected';
    state.error = payload;
  }
  
  const setPending = (state) => {
    state.status = 'loading';
  }


const tableSlice = createSlice({
    name: 'table',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTable.pending, setPending)
        builder.addCase(deleteFetchedTable.pending, setPending)
        builder.addCase(addTable.pending, setPending)
     
        builder.addCase(fetchTable.fulfilled, (state, {payload}) => {
          state.status = 'resolved';
          state.table = payload.results;
        })
        builder.addCase(addTable.fulfilled, (state, {payload}) => {
          state.status = 'resolved';
          state.table.unshift(payload);
        })
        builder.addCase(deleteFetchedTable.fulfilled, (state, {payload}) => {
          state.status = 'resolved';
          state.table = state.table.filter(contact => contact.id !== payload.table.id);
        })
    
        builder.addCase(fetchTable.rejected, setError)
        builder.addCase(deleteFetchedTable.rejected, setError)
        builder.addCase(addTable.rejected, setError)
    
        builder.addCase(editTable.pending, state => {
          state.isLoading = true;
        })
        builder.addCase(editTable.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
        builder.addCase(editTable.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const updatedContact = action.payload;
          state.table = state.table.map(item =>
            item.id === updatedContact.id ? updatedContact : item
          );
        });
      }
    });
    export const { addNewTable, deleteTable } = tableSlice.actions;
    
    export const tableReducer = tableSlice.reducer;
  