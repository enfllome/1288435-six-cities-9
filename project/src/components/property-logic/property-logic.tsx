import { useParams } from 'react-router-dom';
import Offer from '../../types/offers';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';

type PropertyLogicProps = {
  offers: Array<Offer>,
}

function PropertyLogic ({ offers }:PropertyLogicProps): JSX.Element {
  const { id } = useParams();
  const currentOffer = offers.find((offer) => offer.id === id);

  if(!currentOffer) {
    return <NotFoundScreen />;
  }

  return (
    <Property offer={currentOffer}/>
  );
}

export default PropertyLogic;
