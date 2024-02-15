import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    pseudo: 'Guest',
    email: '',
    password: '',
  },
  reducers: {
    login: (state, action) => {
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;