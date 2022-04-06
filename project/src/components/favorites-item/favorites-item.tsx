import { Link } from 'react-router-dom';
import Offer from '../../types/offers';
import FavoritesPlace from '../favorites-place/favorites-place';

type FavoritesItemProps = {
  favoriteOffers: Offer[],
  city: string
}

function FavoritesItem ({ favoriteOffers, city }: FavoritesItemProps): JSX.Element | null {
  const filteredOffers = favoriteOffers.filter((offer) => offer.city.name === city && offer.isFavorite);

  if (filteredOffers.length === 0) {
    return null;
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          filteredOffers.map((offer) => (<FavoritesPlace key={offer.id} {...offer}/>))
        }
      </div>
    </li>
  );
}

export default FavoritesItem;
