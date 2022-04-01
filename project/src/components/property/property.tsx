import Comment from '../../types/comment';
import Offer from '../../types/offers';
import FormReview from '../form-review/form-review';
import Header from '../header/header';
import ReviewsList from '../reviews-list/review-list';
import Map from '../map/map';
import NearOffersList from '../near-offers-list/near-offers-list';
import { CityName } from '../../types/city-name';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCommentsAction, fetchOfferAction } from '../../store/api-actions';
import GoodsList from '../goods-list/goods-list';
import Host from '../host/host';

type PropertyProps = {
  offer: Offer,
  offers: Array<Offer>,
  comments: Array<Comment>,
  city: CityName,
}

function Property ({ offer, comments, offers, city }: PropertyProps): JSX.Element {
  const ratingProcent = (offer.rating / 5) * 100;
  const {id, images} = offer;

  const sliceImages = images.slice(0, 6);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                sliceImages.map((img, idx) => (
                  <div key={`${idx + img}`} className="property__image-wrapper">
                    <img className="property__image" src={img} alt="Photos studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  { offer.title }
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{
                    'width': `${ratingProcent}%`,
                  }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  { offer.type }
                </li>
                <li className="property__feature property__feature--bedrooms">
                  { offer.bedrooms } Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max { offer.maxAdults } adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{ offer.price }</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <GoodsList goods={offer.goods}/>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <Host host={offer.host}/>
                <div className="property__description">
                  <p className="property__text">
                    { offer.description }
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList comments={comments} />
                <FormReview />
              </section>
            </div>
          </div>
          <Map className='property__map map' city={city} points={offers}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearOffersList offers={offers}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
