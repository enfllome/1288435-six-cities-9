import City from './city';

type Offer = {
  id: string,
  previewImage?: string
  price: number,
  title: string,
  type: string,
  description?: string,
  rating: number,
  bedrooms?: number,
  maxAdults?: number,
  city: City,
}

export default Offer;
