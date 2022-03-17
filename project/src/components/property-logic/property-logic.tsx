import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';
import { useAppSelector } from '../../hooks';

function PropertyLogic (): JSX.Element {
  const { offers, comments } = useAppSelector((state) => state);
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
