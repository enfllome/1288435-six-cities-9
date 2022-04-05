import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { UserProcess } from '../../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  login: '',
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    removeLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const {requireAuthorization, setLogin, removeLogin} = userProcess.actions;
