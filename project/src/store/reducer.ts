import { createReducer } from '@reduxjs/toolkit';
import { comments } from '../mocks/comments';
import { offers } from '../mocks/offers';
import { setActiveCity } from './action';

const initialState = {
  activeCity: 'Paris',
  offers,
  comments,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setActiveCity, (state, action) => {
    state.activeCity = action.payload;
  });
});

export { reducer };
