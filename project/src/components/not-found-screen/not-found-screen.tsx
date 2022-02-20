import { Link } from 'react-router-dom';

function NotFoundScreen (): JSX.Element {
  return (
    <div className="cities__status-wrapper">
      <b className="cities__status">404. Page not found</b>
      <Link className="cite__status__link" to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundScreen;
