import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeFavoriteStatus } from '../../store/api-actions';
import { ChangeFavoriteStatus } from '../../types/change-favorite-status';
import Offer from '../../types/offers';
import { calculateRating } from '../../utils';

function FavoritesPlace ({ price, title, type, previewImage, id, rating, isFavorite, isPremium }: Offer): JSX.Element {
  const dispatch = useAppDispatch();

  const isFavoriteStatus = isFavorite ? 'place-card__bookmark-button--active' : '';

  const handleChangeStatus = () => {
    const statusData: ChangeFavoriteStatus = {
      id: id,
      status: Number(!isFavorite),
    };
    dispatch(changeFavoriteStatus(statusData));
  };

  return (
    <article className="favorites__card place-card">
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavoriteStatus} button`} onClick={handleChangeStatus} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              'width': `${calculateRating(rating)}%`,
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{ title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default FavoritesPlace;
