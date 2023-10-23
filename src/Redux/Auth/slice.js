import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operation';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
    },
  });
  
  export const authReducer = authSlice.reducer;
  