import { DEFAULT_OFFER, CommentSendingStatus, CheckFaforiteStatus } from './../../../const';
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
  favotieStatus: CheckFaforiteStatus.NotCheck,
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
    checkFavotireStatus: (state, action) => {
      state.favotieStatus = action.payload;
    },
    updateFavoriteOffer: (state, action) => {
      const {id} = action.payload;
      const index = state.offers.findIndex((offer)=>offer.id === id);
      state.offers[index].isFavorite = action.payload.isFavorite;

      if (state.favoriteOffers.some((item) => item.id === id)) {
        const favoriteIndex = state.favoriteOffers.findIndex((item) => item.id === id);
        state.favoriteOffers.splice(favoriteIndex, 1);
      }

      if (state.nearbyOffers.some((item) => item.id === id)) {
        const nearbyIndex = state.nearbyOffers.findIndex((item) => item.id === id);
        state.nearbyOffers[nearbyIndex].isFavorite = action.payload.isFavorite;
      }

      if (state.selectedOffer.id === id) {
        state.selectedOffer.isFavorite = action.payload.isFavorite;
      }
    },
  },
});

export const {loadOffers, loadOffer, loadComments, changeCommentSendingStatus, loadNearby, loadFavorites, updateFavoriteOffer, checkFavotireStatus} = dataProcess.actions;
