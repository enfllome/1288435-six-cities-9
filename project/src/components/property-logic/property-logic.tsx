import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';
import { useAppSelector } from '../../hooks';
import { getCity, getComments, getCurrentOfferLoaded, getOffer, getOffers } from '../../store/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect } from 'react';
import { fetchCommentsAction, fetchOfferAction } from '../../store/api-actions';
import { useDispatch } from 'react-redux';

function PropertyLogic (): JSX.Element {
  const comments = useAppSelector(getComments);
  const offers = useAppSelector(getOffers);
  const { id } = useParams();
  const activeCity = useAppSelector(getCity);
  const offer = useAppSelector(getOffer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
  }, [dispatch, id]);
  const isCurrentOfferLoaded = useAppSelector(getCurrentOfferLoaded);

  if (!isCurrentOfferLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if(!offer) {
    return <NotFoundScreen />;
  }

  return (
    <Property offers={offers} offer={offer} comments={comments} city={activeCity}/>
  );
}

export default PropertyLogic;
