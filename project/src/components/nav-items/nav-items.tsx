
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAutorizationStatus } from '../../store/selectors';
import SignIn from './sign-in/sign-in';
import SignOut from './sign-out/sign-out';

function NavItems ():JSX.Element {
  const authorizationStatus = useAppSelector(getAutorizationStatus);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authorizationStatus !== AuthorizationStatus.Auth ? <SignIn /> : <SignOut/>
        }
      </ul>
    </nav>
  );
}

export default NavItems;
