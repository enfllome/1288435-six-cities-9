import {store} from '../store/index';
import {AuthorizationStatus, CommentSendingStatus} from '../const';
import Offer from './offers';
import { CityName } from './city-name';
import Comment from './comment';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type DataProcess = {
  offers: Offer[],
  nearbyOffers: Offer[],
  selectedOffer: Offer,
  comments: Comment[],
  favoriteOffers: Offer[],
  isDataLoaded: boolean,
  isCurrentOfferLoaded: boolean,
  commentSendingStatus: CommentSendingStatus
}

export type AnotherProcess = {
  activeCity: CityName,
  sorting: string,
  hoveredOffer: Offer | null,
  error: string,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
