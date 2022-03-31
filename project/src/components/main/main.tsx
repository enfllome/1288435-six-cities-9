import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity, setSorted } from '../../store/action';
import { getCity, getCurrentSorted, getHoveredOffer, getOffersForSelectCity, getSortOffersByType } from '../../store/selectors';
import Header from '../header/header';
import LocationItem from '../location-item/location-item';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Sorted from '../sorted/sorted';

const Locations: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function Main(): JSX.Element {
  const activeCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();
  const handleClickCity = (name: string) => dispatch(setActiveCity(name));
  const filteredOffers = useAppSelector(getOffersForSelectCity);
  const currentSorting = useAppSelector(getCurrentSorted);
  const setSorting = (typeSort: string) => {
    dispatch(setSorted(typeSort));
  };
  const sortedOffers = getSortOffersByType(filteredOffers,currentSorting);
  const selectedOffer = useAppSelector(getHoveredOffer);
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
              <Sorted currentSorting={currentSorting} setSorting={setSorting}/>
              <OffersList sortedOffers={sortedOffers}/>
            </section>
            <div className="cities__right-section">
              <Map className='cities__map map' city={activeCity} points={filteredOffers} selectedOffer={selectedOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
