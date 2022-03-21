import { useDispatch } from 'react-redux';
import { selectOffer, unselectOffer } from '../../store/action';
import Offer from '../../types/offers';
import OfferItem from '../offers-item/offers-item';

type OffersListProps = {
  sortedOffers: Array<Offer>,
}

function OffersList ({ sortedOffers }: OffersListProps):JSX.Element {
  const dispatch = useDispatch();

  const getCurrentOffer = (offer: Offer) => {
    dispatch(selectOffer(offer));
  };

  const setCurrentOffer = () => {
    dispatch(unselectOffer(null));
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortedOffers.map((offer) => (
          <OfferItem key={offer.id} getCurrentOffer={getCurrentOffer} setCurrentOffer={setCurrentOffer} offer={offer} />
        ))
      }
    </div>
  );
}

export default OffersList;
