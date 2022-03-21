import { createAction } from '@reduxjs/toolkit';

export const setActiveCity = createAction('main/setActiveCity', (cityName) => ({
  payload: cityName,
}));

export const setSorted = createAction('main/setSorted', (sortedType) => ({
  payload: sortedType,
}));

export const selectOffer = createAction('main/selectOffer', (offer) => ({
  payload: offer,
}));

export const unselectOffer = createAction('main/unselectOffer', (offer) => ({
  payload: offer,
}));
