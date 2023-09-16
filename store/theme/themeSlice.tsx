import { createSlice } from '@reduxjs/toolkit';
import { type InitialThemeState } from '@/types';

const initialState: InitialThemeState = { mode: 'dark' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
        return;
      }
      state.mode = 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
