import { createSlice } from '@reduxjs/toolkit';

const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState: {
    query: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchFormSlice.actions;

export default searchFormSlice.reducer;