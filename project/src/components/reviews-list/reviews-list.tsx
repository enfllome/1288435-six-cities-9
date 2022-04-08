import Comment from '../../types/comment';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  comments: Array<Comment>,
}

function ReviewsList({ comments }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        comments.map((comment) => (
          <ReviewsItem key={comment.id} comment={comment}/>
        ))
      }
    </ul>
  );
}

export default ReviewsList;
