import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTable = createAsyncThunk(
  'table/fetchTable',
  async function({page}, { rejectWithValue }) {
    try {
      const response = await axios.get('/table/', {
        params: {
          limit: 5,
          page: `${page}`,
          offset: `${page}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
  
  export const deleteFetchedTable = createAsyncThunk(
    'table/deleteFetchedTable',
    async function(id, {rejectWithValue}) {
 
      try {
        const response = await axios.delete(`/table/${id}`)
        return response.data
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )
  
  export const addTable = createAsyncThunk(
    'table/addTable',
    async function(table, {rejectWithValue}) {
     try {
      
      const response = await axios.post(`/table/`, {
        ...table
      })
     
      return response.data
    }catch (error) {
      return rejectWithValue(error.message)
     }
    }
  )
  
  export const editTable = createAsyncThunk(
    'contacts/editTable',
    async (data, thunkAPI) => {
      try {
        const response = await axios.patch(`/table/${data.id}/`, {
          name: data.name,
          email: data.email,
          birthday_date: data.birthday_date,
          phone_number: data.phone_number,
          address: data.address,
        });

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )