import { createSlice } from '@reduxjs/toolkit';
import {  logIn} from './operation';
import { showNotification } from 'components/notifications';

const initialState = {
    isLoggedIn: true,

  };


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(logIn.fulfilled, (state, action) => {
        showNotification('Authorization was successful!');
        state.isLoggedIn = true;
        
      });
  
      builder.addCase(logIn.rejected, (state, action) => {
        showNotification('Something went wrong');
      });
    },
  });
  
  export const authReducer = authSlice.reducer;
  