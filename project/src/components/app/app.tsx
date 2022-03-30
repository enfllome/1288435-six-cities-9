import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import PropertyLogic from '../property-logic/property-logic';
import { useAppSelector } from '../../hooks';
import { getAutorizationStatus, getDataLoaded } from '../../store/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {

  const isDataLoaded = useAppSelector(getDataLoaded);
  const autorizationStatus = useAppSelector(getAutorizationStatus);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              autorizationStatus={autorizationStatus}
            >
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
