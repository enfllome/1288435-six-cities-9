import { useDispatch } from 'react-redux';
import { selectOffer } from '../../store/action';
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

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortedOffers.map((offer) => (
          <OfferItem key={offer.id} getCurrentOffer={getCurrentOffer} offer={offer} />
        ))
      }
    </div>
  );
}

export default OffersList;
