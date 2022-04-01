import { AuthorizationStatus } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import Comment from '../types/comment';
import { CityName } from '../types/city-name';
import Offer from '../types/offers';
import { selectOffer, setActiveCity, setSorted, unselectOffer, loadOffers, requireAuthorization, setError, loadComments, loadOffer } from './action';

type InitialState = {
  activeCity: CityName,
  offers: Offer[],
  selectedOffer: Offer | null,
  comments: Comment[],
  sorting: string,
  hoveredOffer: Offer | null,
  isDataLoaded: boolean,
  isCurrentOfferLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string,
}

const initialState: InitialState = {
  activeCity: 'Paris',
  offers: [],
  selectedOffer: null,
  comments: [],
  sorting: 'id',
  hoveredOffer: null,
  isDataLoaded: false,
  isCurrentOfferLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setActiveCity, (state, action) => {
    state.activeCity = action.payload;
  })
    .addCase(setSorted, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.hoveredOffer = action.payload;
    })
    .addCase(unselectOffer, (state, action) => {
      state.hoveredOffer = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.selectedOffer = action.payload;
      state.isCurrentOfferLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export { reducer };
