import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactForm/contactsSlice';
import { filterReducer } from './contactForm/filterSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
