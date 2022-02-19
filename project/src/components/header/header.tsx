import { AppRoute } from '../../const';
import Logo from '../logo/logo';
import NavItems from '../nav-items/nav-items';

function Header ():JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo width='81' height='41' />
          </div>
          {
            window.location.pathname !== AppRoute.Login && <NavItems />
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
