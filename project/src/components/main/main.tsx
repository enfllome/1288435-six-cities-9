import { useAppDispatch, useAppSelector } from '../../hooks';
import { CITY } from '../../mocks/city';
import { setActiveCity } from '../../store/action';
import { getCity, getOffers } from '../../store/selectors';
import Header from '../header/header';
import LocationItem from '../location-item/location-item';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';

const Locations: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function Main(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();
  const handleClickCity = (name: string) => dispatch(setActiveCity(name));
  const filteredOffers = offers.filter((elem) =>  elem.city.name === activeCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                Locations.map((cityName) => (
                  <LocationItem key={cityName} name={cityName} active={activeCity === cityName} handleClickCity={handleClickCity} />
                ))
              }
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ filteredOffers.length } places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList filteredOffers={filteredOffers}/>
            </section>
            <div className="cities__right-section">
              <Map className='cities__map map' city={CITY} points={filteredOffers}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
