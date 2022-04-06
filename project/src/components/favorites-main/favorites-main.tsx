import { LOCATIONS } from '../../const';
import Offer from '../../types/offers';
import FavoritesItem from '../favorites-item/favorites-item';

type FavoritesMainProps = {
  favoriteOffers: Offer[],
}

function FavoritesMain ({ favoriteOffers }: FavoritesMainProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {LOCATIONS.map((city) => (<FavoritesItem key={city} favoriteOffers={favoriteOffers} city={city} />))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesMain;
