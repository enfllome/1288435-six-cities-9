import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  autorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps):JSX.Element {
  const { autorizationStatus, children } = props;
  return (
    autorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
