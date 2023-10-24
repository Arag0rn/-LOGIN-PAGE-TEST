import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api/';



// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };



export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    console.log(credentials);
   
    try {
      const res = await axios.post('login/', credentials);
   
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



