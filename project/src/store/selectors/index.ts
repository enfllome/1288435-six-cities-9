import { State } from '../../types/state';

export const getCity = (state: State) => state.activeCity;

export const getOffers = (state: State) => state.offers;

export const getComments = (state: State) => state.comments;

export const getCurrentOffer = (id: string | undefined) => (state: State) => state.offers.find((offer) => offer.id === id);

