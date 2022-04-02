import { AuthorizationStatus } from '../../const';

type NavItemsProps = {
  autorizationStatus: AuthorizationStatus
}

function NavItems ({ autorizationStatus }: NavItemsProps):JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          autorizationStatus === AuthorizationStatus.Auth &&
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              </a>
            </li>
        }
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout">
              {
                autorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'
              }
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavItems;
