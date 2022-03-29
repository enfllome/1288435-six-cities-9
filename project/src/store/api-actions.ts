import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { api, store } from '../store';
import Offer from '../types/offers';
import { loadOffers } from './action';


export const fetchQuestionAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
  },
);
