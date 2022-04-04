import { rootReducer } from './../reducers/root-reducer';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer>=
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'main/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
