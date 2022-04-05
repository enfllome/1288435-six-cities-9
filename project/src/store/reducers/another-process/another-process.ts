import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { AnotherProcess } from '../../../types/state';

const initialState: AnotherProcess = {
  activeCity: 'Paris',
  sorting: 'id',
  hoveredOffer: null,
  error: '',
};

export const anotherProcess = createSlice({
  name: NameSpace.another,
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.activeCity = action.payload;
    },
    setSorted: (state, action) => {
      state.sorting = action.payload;
    },
    selectOffer: (state, action) => {
      state.hoveredOffer = action.payload;
    },
    unselectOffer: (state, action) => {
      state.hoveredOffer = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setActiveCity, setSorted, selectOffer, unselectOffer, setError} = anotherProcess.actions;
