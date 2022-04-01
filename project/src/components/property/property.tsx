import Comment from '../../types/comment';
import Offer from '../../types/offers';
import FormReview from '../form-review/form-review';
import Header from '../header/header';
import ReviewsList from '../reviews-list/review-list';
import Map from '../map/map';
import NearOffersList from '../near-offers-list/near-offers-list';
import { CityName } from '../../types/city-name';
import GoodsList from '../goods-list/goods-list';
import Host from '../host/host';
import { getAutorizationStatus } from '../../store/selectors';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

type PropertyProps = {
  offer: Offer,
  offers: Array<Offer>,
  comments: Array<Comment>,
  city: CityName,
}

function Property ({ offer, comments, offers, city }: PropertyProps): JSX.Element {
  const {rating, images, isPremium, title, type, bedrooms, maxAdults, price, goods, host, description} = offer;

  const ratingProcent = (rating / 5) * 100;

  const sliceImages = images.slice(0, 6);

  const autorizationStatus = useAppSelector(getAutorizationStatus);

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
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  { title }
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
                <span className="property__rating-value rating__value">{ rating }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  { type }
                </li>
                <li className="property__feature property__feature--bedrooms">
                  { bedrooms } Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max { maxAdults } adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{ price }</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <GoodsList goods={goods}/>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <Host host={host}/>
                <div className="property__description">
                  <p className="property__text">
                    { description }
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList comments={comments} />
                {
                  autorizationStatus === AuthorizationStatus.Auth && <FormReview />
                }
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
