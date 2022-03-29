import { createReducer } from '@reduxjs/toolkit';
import { comments } from '../mocks/comments';
import Comment from '../types/comment';
import Offer from '../types/offers';
import { selectOffer, setActiveCity, setSorted, unselectOffer, loadOffers } from './action';

type InitialState = {
  activeCity: string,
  offers: Offer[],
  comments: Comment[],
  sorting: string,
  hoveredOffer: Offer | null,
}

const initialState: InitialState = {
  activeCity: 'Paris',
  offers: [],
  comments,
  sorting: 'id',
  hoveredOffer: null,
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
    });
});

export { reducer };
