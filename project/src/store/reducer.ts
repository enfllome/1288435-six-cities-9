import { createReducer } from '@reduxjs/toolkit';
import { comments } from '../mocks/comments';
import { offers } from '../mocks/offers';
import { selectOffer, setActiveCity, setSorted, unselectOffer } from './action';

const initialState = {
  activeCity: 'Paris',
  offers,
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
    });
});

export { reducer };
