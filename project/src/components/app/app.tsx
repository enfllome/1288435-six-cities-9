import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import Offer from '../../types/offers';
import PropertyLogic from '../property-logic/property-logic';

type AppProps = {
  offers: Array<Offer>,
};

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main offers={offers}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              autorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<PropertyLogic offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn />}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
