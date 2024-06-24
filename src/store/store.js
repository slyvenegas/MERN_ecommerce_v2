import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Asegúrate de que la ruta sea correcta

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export default store;
