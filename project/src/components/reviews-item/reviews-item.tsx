import Comment from '../../types/comment';
import { formatDate } from '../../utils';

type ReviewsItemProps = {
  comment: Comment
}

function ReviewsItem({ comment }: ReviewsItemProps): JSX.Element {
  const ratingProcent = (comment.rating / 5) * 100;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt={`Reviews ${comment.user.name} avatar`} />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
        {
          comment.user.isPro && <span className="property__user-status">Pro</span>
        }
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              'width': `${ratingProcent}%`,
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatDate(comment.date)}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
