import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import {Route, Routes} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import PropertyLogic from '../property-logic/property-logic';
import { useAppSelector } from '../../hooks';
import { getDataLoaded } from '../../store/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getDataLoaded);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<PropertyLogic />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
