import { AuthorizationStatus, CommentSendingStatus, DEFAULT_OFFER } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import Comment from '../types/comment';
import { CityName } from '../types/city-name';
import Offer from '../types/offers';
import { selectOffer, setActiveCity, setSorted, unselectOffer, loadOffers, requireAuthorization, setError, loadComments, loadOffer, changeCommentSendingStatus, loadNearby } from './action';

type InitialState = {
  activeCity: CityName,
  offers: Offer[],
  nearbyOffers: Offer[],
  selectedOffer: Offer,
  comments: Comment[],
  sorting: string,
  hoveredOffer: Offer | null,
  isDataLoaded: boolean,
  isCurrentOfferLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  commentSendingStatus: CommentSendingStatus
  error: string,
}

const initialState: InitialState = {
  activeCity: 'Paris',
  offers: [],
  nearbyOffers: [],
  selectedOffer: DEFAULT_OFFER,
  comments: [],
  sorting: 'id',
  hoveredOffer: null,
  isDataLoaded: false,
  isCurrentOfferLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  commentSendingStatus: CommentSendingStatus.NotSent,
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
    })
    .addCase(changeCommentSendingStatus, (state, action) => {
      state.commentSendingStatus = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});

export { reducer };
