import Sorted from './types/sorted';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const TILE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const sorted: Sorted[] = [
  {
    name: 'id',
    title: 'Popular',
  },
  {
    name: 'toHigh',
    title: 'Price: low to high',
  },
  {
    name: 'toLow',
    title: 'Price: high to low',
  },
  {
    name: 'rating',
    title: 'Top rated first',
  },
];
