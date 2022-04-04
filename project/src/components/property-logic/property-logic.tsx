import { useParams } from 'react-router-dom';
import Property from '../property/property';
import { useAppSelector } from '../../hooks';
import { getCity, getComments, getCurrentOfferLoaded, getNearbyOffers, getOffer } from '../../store/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect } from 'react';
import { fetchCommentsAction, fetchNearbyOffersAction, fetchOfferAction } from '../../store/api-actions';
import { useDispatch } from 'react-redux';

function PropertyLogic (): JSX.Element {
  const comments = useAppSelector(getComments);
  const { id } = useParams();
  const activeCity = useAppSelector(getCity);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
    dispatch(fetchNearbyOffersAction(Number(id)));
  }, [dispatch, id]);
  const isCurrentOfferLoaded = useAppSelector(getCurrentOfferLoaded);

  if (!isCurrentOfferLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Property nearbyOffers={nearbyOffers} offer={offer} comments={comments} city={activeCity}/>
  );
}

export default PropertyLogic;
