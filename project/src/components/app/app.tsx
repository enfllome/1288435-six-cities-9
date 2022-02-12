import Main from '../main/main';
// import SignIn from '../sign-in/sign-in';
// import Favorites from '../favorites/favorites';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
// import Property from '../property/property';

type AppProps = {
  offersCount: number,
};

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <Main
      offersCount={offersCount}
    />
    // <SignIn />
    // <Favorites />
    // <FavoritesEmpty />
    // <Property />
  );
}

export default App;
