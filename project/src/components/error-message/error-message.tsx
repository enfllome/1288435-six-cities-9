import {useAppSelector} from '../../hooks';
import { getError } from '../../store/selectors';
import './error-message.css';
type ErrorMessageProps = {
  children?: React.ReactNode
}
function ErrorMessage({children}: ErrorMessageProps): JSX.Element | null {
  const error = useAppSelector(getError);

  if (error || children) {
    return (
      <div
        className='error-message'
      >
        {error || children}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
