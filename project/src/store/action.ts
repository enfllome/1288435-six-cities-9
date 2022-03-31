import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import Offer from '../types/offers';

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

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('main/setError');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
