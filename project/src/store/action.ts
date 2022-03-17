import { createAction } from '@reduxjs/toolkit';

export const setActiveCity = createAction('main/setActiveCity', (cityName) => ({
  payload: cityName,
}));
