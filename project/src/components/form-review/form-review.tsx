import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { commentAction } from '../../store/api-actions';
import { CommentData } from '../../types/comment-data';
import ReviewStar from '../review-star/review-star';

const starOptions = [
  {
    id: '5-stars',
    title: 'perfect',
    value: 5,
  },
  {
    id: '4-star',
    title: 'good',
    value: 4,
  },
  {
    id: '3-stars',
    title: 'not bad',
    value: 3,
  },
  {
    id: '2-stars',
    title: 'badly',
    value: 2,
  },
  {
    id: '1-star',
    title: 'terribly',
    value: 1,
  },
];

type FormReviewProps = {
  id: number,
}

function FormReview ({id}: FormReviewProps): JSX.Element {
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(0);

  const handleChangeField = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  const updateData = (value: number) => {
    setStars(value);
  };

  // eslint-disable-next-line no-console
  console.log(stars);

  const dispatch = useAppDispatch();

  const onSubmit = (сommentData: CommentData) => {
    dispatch(commentAction(сommentData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (review !== null && stars !== null) {
      onSubmit({
        id,
        comment: review,
        rating: stars,
      });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          starOptions.map((star) => (
            <ReviewStar key={star.id} updateData={updateData} star={star} />
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChangeField}
        value={review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!review}>Submit</button>
      </div>
    </form>
  );
}

export default FormReview;
