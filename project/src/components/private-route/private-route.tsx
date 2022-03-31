import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAutorizationStatus } from '../../store/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps):JSX.Element {
  const { children } = props;
  const autorizationStatus = useAppSelector(getAutorizationStatus);
  return (
    autorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
