import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export type LocationItemProps = {
  name: string;
  active: boolean;
  handleClickCity: (name: string) => void;
};

function LocationItem ({ name, active, handleClickCity }: LocationItemProps ): JSX.Element {

  return (
    <li className="locations__item">
      <Link
        to={AppRoute.Root}
        className={`locations__item-link tabs__item ${active ? 'tabs__item--active' : ''}`}
        onClick={() => handleClickCity(name)}
      >
        <span>{ name }</span>
      </Link>
    </li>
  );
}

export default LocationItem;
