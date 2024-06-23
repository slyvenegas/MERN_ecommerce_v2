import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Asegúrate de que la ruta sea correcta

export const store = configureStore({
  reducer: {
    user: userReducer, // Usa el reducer de userSlice
  },
});

export default store;
