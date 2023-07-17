import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue('Something went wrong', error);
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export { fetchUsers };
export default usersSlice.reducer;
