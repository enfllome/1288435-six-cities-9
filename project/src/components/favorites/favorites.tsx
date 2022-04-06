import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesMain from '../favorites-main/favorites-main';
import Header from '../header/header';
import Logo from '../logo/logo';

function Favorites (): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <>
      <Header />
      {
        favoriteOffers.length === 0 ? <FavoritesEmpty /> : <FavoritesMain favoriteOffers={favoriteOffers} />
      }
      <footer className="footer container">
        <Logo width='64' height='33'/>
      </footer>
    </>
  );
}

export default Favorites;
