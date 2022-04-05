import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOCATIONS } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/selectors';
import FavoritesItem from '../favorites-item/favorites-item';
import Header from '../header/header';
import Logo from '../logo/logo';

function Favorites (): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(fetchFavoriteOffersAction);
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  return (
    <>
      <Header />
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
      <footer className="footer container">
        <Logo width='64' height='33'/>
      </footer>
    </>
  );
}

export default Favorites;
