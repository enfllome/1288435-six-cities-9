import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, AuthorizationStatus, CommentSendingStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { api, store } from '../store';
import { AuthData } from '../types/auth-data';
import { ChangeFavoriteStatus } from '../types/change-favorite-status';
import Comment from '../types/comment';
import { CommentData } from '../types/comment-data';
import Offer from '../types/offers';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import { setError } from './reducers/another-process/another-process';
import { changeCommentSendingStatus, loadComments, loadFavorites, loadNearby, loadOffer, loadOffers, updateFavoriteOffer } from './reducers/data-process/data-process';
import { removeLogin, requireAuthorization, setLogin } from './reducers/user-process/user-process';

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffer',
  async (id: number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'data/fetchNearbyOffer',
  async (id: number) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      store.dispatch(loadNearby(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk(
  'data/fetchFavoriteOffersAction',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Favorite);
      store.dispatch(loadFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const changeFavoriteStatus = createAsyncThunk(
  'data/changeFavoriteStatus',
  async ({id, status}: ChangeFavoriteStatus)=>{
    try {
      const {data} = await api.post(`${APIRoute.Favorite}/${id}/${status}`);
      store.dispatch(updateFavoriteOffer(data));
    } catch(err){
      errorHandle(err);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setLogin(email));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(removeLogin(''));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/comments',
  async (id: number) => {
    try {
      const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const commentAction = createAsyncThunk(
  'user/comments',
  async ({id, comment, rating}: CommentData) => {
    try {
      await api.post<Comment>(`${APIRoute.Comments}/${id}`, {comment, rating});
      store.dispatch(fetchCommentsAction(id));
      store.dispatch(changeCommentSendingStatus(CommentSendingStatus.Sent));
    } catch (error) {
      errorHandle(error);
      store.dispatch(changeCommentSendingStatus(CommentSendingStatus.Error));
    }
  },
);

