import Offer from '../../types/offers';
import { State } from '../../types/state';

export const getCity = ({ANOTHER}: State) => ANOTHER.activeCity;

export const getOffers = ({DATA}: State) => DATA.offers;

export const getOffer = ({DATA}: State) => DATA.selectedOffer;

export const getNearbyOffers = ({DATA}: State) => DATA.nearbyOffers;

export const getComments = ({DATA}: State) => DATA.comments;

export const getFavoriteOffers = ({DATA}: State) => DATA.favoriteOffers;

export const getCurrentOffer = (id: number | undefined) => ({DATA}: State) => DATA.offers.find((offer) => offer.id === id);

export const getOffersForSelectCity = ({DATA, ANOTHER}: State) => DATA.offers.filter((elem) =>  elem.city.name === ANOTHER.activeCity);

export const getCurrentSorted = ({ANOTHER}: State) => ANOTHER.sorting;

export const getSortOffersByType = (offers: Offer[], typeSort: string) => {
  switch(typeSort) {
    case 'id':
      return offers.sort((a, b) => a.id - b.id);
    case 'toHigh':
      return offers.sort((a, b) => a.price - b.price);
    case 'toLow':
      return offers.sort((a, b) => b.price - a.price);
    case 'rating':
      return offers.sort((a, b) => b.rating - a.rating);
    default: return offers;
  }
};

export const getHoveredOffer = ({ANOTHER}: State) => ANOTHER.hoveredOffer;

export const getDataLoaded = ({DATA}: State) => DATA.isDataLoaded;

export const getCurrentOfferLoaded = ({DATA}: State) => DATA.isCurrentOfferLoaded;

export const getAutorizationStatus = ({USER}: State) => USER.authorizationStatus;

export const getError = ({ANOTHER}: State) => ANOTHER.error;

export const getCommentSendingStatus = ({DATA}: State) => DATA.commentSendingStatus;

export const getLogin = ({USER}: State) => USER.login;


