import Offer from '../../types/offers';
import FavoritesItem from '../favorites-item/favorites-item';
import Header from '../header/header';

type FavoritesProps = {
  offers: Array<Offer>,
};

function Favorites ({ offers }: FavoritesProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    offers.map((offer) => (
                      <FavoritesItem key={offer.id} {...offer} />
                    ))
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default Favorites;
