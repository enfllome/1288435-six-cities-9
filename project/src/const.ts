import Sorted from './types/sorted';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '404',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
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

export const COORDINATES = {
  'Paris': {
    LAT: 48.85661,
    LNG: 2.351499,
  },
  'Cologne': {
    LAT: 50.938361,
    LNG: 6.959974,
  },
  'Brussels': {
    LAT: 50.846557,
    LNG: 4.351697,
  },
  'Amsterdam': {
    LAT: 52.37454,
    LNG: 4.897976,
  },
  'Hamburg': {
    LAT: 53.550341,
    LNG: 10.000654,
  },
  'Dusseldorf': {
    LAT: 51.225402,
    LNG: 6.776314,
  },
};

export const ZOOM = 13;

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
