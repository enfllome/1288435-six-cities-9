import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import { AppRoute } from '../../../const';
import { logoutAction } from '../../../store/api-actions';
import { getLogin } from '../../../store/selectors';

function SignOut (){
  const login = useAppSelector(getLogin);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logoutAction());
  };
  return(
    <Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{login}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={'/'}>
          <span className="header__signout" onClick={handleClick}>Sign out</span>
        </Link>
      </li>
    </Fragment>
  );
}

export default SignOut;
