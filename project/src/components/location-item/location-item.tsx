import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setActiveCity } from '../../store/action';

export type LocationItemProps = {
  id: string;
  name: string;
  active: boolean;
};

function LocationItem ({ name, id, active }: LocationItemProps ): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item">
      <Link
        to={AppRoute.Root}
        className={`locations__item-link tabs__item ${active ? 'tabs__item--active' : ''}`}
        onClick={() => dispatch(setActiveCity(name))}
      >
        <span>{ name }</span>
      </Link>
    </li>
  );
}

export default LocationItem;
