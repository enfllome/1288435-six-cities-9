import Offer from '../../types/offers';
import { State } from '../../types/state';

export const getCity = (state: State) => state.activeCity;

export const getOffers = (state: State) => state.offers;

export const getComments = (state: State) => state.comments;

export const getCurrentOffer = (id: number | undefined) => (state: State) => state.offers.find((offer) => offer.id === id);

export const getOffersForSelectCity = (state: State) => state.offers.filter((elem) =>  elem.city.name === state.activeCity);

export const getCurrentSorted = (state: State) => state.sorting;

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

export const getHoveredOffer = (state: State) => state.hoveredOffer;

export const getDataLoaded = (state: State) => state.isDataLoaded;
