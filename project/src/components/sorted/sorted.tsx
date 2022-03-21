import { useState } from 'react';
import { sorted } from '../../const';

type SortedProps = {
  currentSorting: string,
  setSorting: (typeSort: string) => void,
}

function Sorted({ currentSorting, setSorting }: SortedProps): JSX.Element {

  const [isActive, setIsactive] = useState(false);
  const onClick = () => {
    setIsactive(!isActive);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={onClick}>
        {
          sorted.find((sorter) => sorter.name === currentSorting)?.title
        }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isActive ? ' places__options--opened' : ''}`}>
        {
          sorted.map(({name, title}) => (
            <li
              key={name}
              className={`places__option${currentSorting === name ? ' places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => setSorting(name)}
            >
              {title}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sorted;
