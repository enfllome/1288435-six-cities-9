import { useAppDispatch, useAppSelector } from '../../hooks';
import { CITY } from '../../mocks/city';
import { setActiveCity } from '../../store/action';
import Header from '../header/header';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';

type LocationItemProps = {
  id: string;
  name: string;
  active: boolean;
};

const Locations: Array<LocationItemProps> = [
  {
    id: '0',
    name: 'Paris',
    active: true,
  },
  {
    id: '1',
    name: 'Cologne',
    active: false,
  },
  {
    id: '2',
    name: 'Brussels',
    active: false,
  },
  {
    id: '3',
    name: 'Amsterdam',
    active: false,
  },
  {
    id: '4',
    name: 'Hamburg',
    active: false,
  },
  {
    id: '5',
    name: 'Dusseldorf',
    active: false,
  },
];

function LocationItem ({ name, id, active }: LocationItemProps ): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${active ? 'tabs__item--active' : ''}`}
        href="#"
        onClick={() => dispatch(setActiveCity(name))}
      >
        <span>{ name }</span>
      </a>
    </li>
  );
}

function Main(): JSX.Element {
  const { offers, activeCity } = useAppSelector((store) => store);

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
                Locations.map(({id, name}) => (
                  <LocationItem key={id} id={id} name={name} active={activeCity === name}/>
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
