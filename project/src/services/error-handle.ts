import { AppRoute } from './../const';
import request from 'axios';
import {store} from '../store';
import {redirectToRoute} from '../store/action';
import {clearErrorAction} from '../store/api-actions';
import {ErrorType} from '../types/error';
import {HttpCode} from '../const';
import { setError } from '../store/reducers/another-process/another-process';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        handleError(response.data.error);
        break;
      case HttpCode.UnAuthorized:
        handleError(response.data.error);
        break;
      case HttpCode.NotFound:
        handleError(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.NotFound));
        break;
    }
  }
};
