import { LOCATIONS } from '../../const';
import { CityName } from '../../types/city-name';
import LocationItem from '../location-item/location-item';

type LocationListProps = {
  activeCity: CityName
  handleClickCity: (name: string) => void,
}

function LocationList({handleClickCity, activeCity}: LocationListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        LOCATIONS.map((cityName) => (
          <LocationItem key={cityName} name={cityName} active={activeCity === cityName} handleClickCity={handleClickCity} />
        ))
      }
    </ul>
  );
}

export default LocationList;
