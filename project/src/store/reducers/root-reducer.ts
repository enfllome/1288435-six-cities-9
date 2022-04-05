import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { anotherProcess } from './another-process/another-process';
import { dataProcess } from './data-process/data-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: dataProcess.reducer,
  [NameSpace.another]: anotherProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
