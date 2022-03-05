import Offer from '../types/offers';

export const offers: Offer[] = [
  {
    id: '1',
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartament',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4.8,
    bedrooms: 2,
    maxAdults: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: '2',
    previewImage: 'img/apartment-02.jpg',
    price: 333,
    title: 'Отличное предложение!',
    type: 'Комната',
    description: 'Не пожалеете лалалалал фывф ывячсяс',
    rating: 3.2,
    bedrooms: 1,
    maxAdults: 1,
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: '3',
    previewImage: 'img/apartment-03.jpg',
    price: 444,
    title: 'Какое то 3е предложение',
    type: 'Лавочка',
    description: 'Накроетесь газеткой и вообще ок',
    rating: 5,
    bedrooms: 0,
    maxAdults: 1,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: '4',
    previewImage: 'img/room.jpg',
    price: 555,
    title: 'Дворец специально для вас',
    type: 'Дворец',
    description: 'Шикарный дворец на берегу моря. Пальмы, песок, мечта каждого!',
    rating: 5,
    bedrooms: 15,
    maxAdults: 20,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
];
