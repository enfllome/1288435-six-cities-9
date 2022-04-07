import { useState } from 'react';
import { sorted } from '../../const';

type SortedProps = {
  currentSorting: string,
  setSorting: (typeSort: string) => void,
}

function Sorted({ currentSorting, setSorting }: SortedProps): JSX.Element {

  const [isActive, setIsactive] = useState(false);
  const handleSortClick = () => {
    setIsactive(!isActive);
  };

  const handleSelectSort = (name: string) => {
    setSorting(name);
    setIsactive(!isActive);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortClick}>
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
              onClick={() => handleSelectSort(name)}
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
