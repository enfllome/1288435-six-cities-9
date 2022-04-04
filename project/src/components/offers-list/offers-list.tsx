import { useDispatch } from 'react-redux';
import { selectOffer } from '../../store/reducers/another-process/another-process';
import Offer from '../../types/offers';
import OfferItem from '../offers-item/offers-item';

type OffersListProps = {
  sortedOffers: Array<Offer>,
}

function OffersList ({ sortedOffers }: OffersListProps):JSX.Element {
  const dispatch = useDispatch();

  const setCurrentOffer = (offer: Offer | null) => {
    dispatch(selectOffer(offer));
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortedOffers.map((offer) => (
          <OfferItem key={offer.id} setCurrentOffer={setCurrentOffer} offer={offer} />
        ))
      }
    </div>
  );
}

export default OffersList;
