import { ChangeEvent } from 'react';
import Star from '../../types/star';

type ReviewStarProps = {
  star: Star,
  updateData: (value: string) => void,
}

function ReviewStar ({ star, updateData }: ReviewStarProps): JSX.Element {

  const handleChangeRating = ({ target }: ChangeEvent<HTMLInputElement>) => {
    updateData(target.value);
  };
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={star.value}
        id={star.id}
        type="radio"
        onChange={handleChangeRating}
      />
      <label htmlFor={star.id} className="reviews__rating-label form__rating-label" title={star.title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewStar;
