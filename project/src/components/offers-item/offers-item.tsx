import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatus } from '../../store/api-actions';
import { getAutorizationStatus } from '../../store/selectors';
import { ChangeFavoriteStatus } from '../../types/change-favorite-status';
import Offer from '../../types/offers';
import { calculateRating } from '../../utils';

type OfferItemProps = {
  offer: Offer,
  setCurrentOffer: (offer: Offer | null) => void,
}

function OfferItem ({ offer, setCurrentOffer }: OfferItemProps): JSX.Element {
  const { price, title, type, previewImage, id, isPremium, rating, isFavorite } = offer;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAutorizationStatus);

  const handleMouseOver = () => {
    setCurrentOffer(offer);
  };

  const handleMouseLeave = () => {
    setCurrentOffer(null);
  };

  const isFavoriteStatus = isFavorite ? 'place-card__bookmark-button--active' : '';

  const handleChangeStatus = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const statusData: ChangeFavoriteStatus = {
        id: id,
        status: Number(!isFavorite),
      };
      dispatch(changeFavoriteStatus(statusData));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <article className="cities__place-card place-card" onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavoriteStatus} button`} onClick={handleChangeStatus} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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

export default OfferItem;
