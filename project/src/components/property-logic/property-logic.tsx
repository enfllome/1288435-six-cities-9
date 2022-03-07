import { useParams } from 'react-router-dom';
import Offer from '../../types/offers';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';
import Comment from '../../types/comment';

type PropertyLogicProps = {
  offers: Array<Offer>,
  comments: Array<Comment>,
}

function PropertyLogic ({ offers, comments }:PropertyLogicProps): JSX.Element {
  const { id } = useParams();
  const currentOffer = offers.find((offer) => offer.id === id);

  if(!currentOffer) {
    return <NotFoundScreen />;
  }

  return (
    <Property offers={offers} offer={currentOffer} comments={comments}/>
  );
}

export default PropertyLogic;
