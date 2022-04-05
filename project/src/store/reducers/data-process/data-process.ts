import { DEFAULT_OFFER, CommentSendingStatus } from './../../../const';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { DataProcess } from '../../../types/state';

const initialState: DataProcess = {
  offers: [],
  nearbyOffers: [],
  selectedOffer: DEFAULT_OFFER,
  comments: [],
  favoriteOffers: [],
  isDataLoaded: false,
  isCurrentOfferLoaded: false,
  commentSendingStatus: CommentSendingStatus.NotSent,
};

export const dataProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadOffer: (state, action) => {
      state.selectedOffer = action.payload;
      state.isCurrentOfferLoaded = true;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    changeCommentSendingStatus: (state, action) => {
      state.commentSendingStatus = action.payload;
    },
    loadNearby: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    loadFavorites: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    updateFavoriteOffer: (state, action) => {
      const {id} = action.payload;
      const index = state.offers.findIndex((offer)=>offer.id === id);
      state.offers[index].isFavorite = action.payload.isFavorite;
    },
  },
});

export const {loadOffers, loadOffer, loadComments, changeCommentSendingStatus, loadNearby, loadFavorites, updateFavoriteOffer} = dataProcess.actions;
