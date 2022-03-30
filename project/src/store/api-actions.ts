import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { api, store } from '../store';
import Offer from '../types/offers';
import { loadOffers, requireAuthorization } from './action';


export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);
