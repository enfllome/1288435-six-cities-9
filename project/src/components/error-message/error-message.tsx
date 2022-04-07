import {useAppSelector} from '../../hooks';
import { getError } from '../../store/selectors';
type ErrorMessageProps = {
  children?: React.ReactNode
}
function ErrorMessage({children}: ErrorMessageProps): JSX.Element | null {
  const error = useAppSelector(getError);

  if (error || children) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {error || children}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
