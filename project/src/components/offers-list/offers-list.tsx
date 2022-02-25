import Offer from '../../types/offers';
import OfferItem from '../offers-item/offers-item';

type OffersListProps = {
  offers: Array<Offer>,
}

function OffersList ({ offers }: OffersListProps):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferItem key={offer.id} {...offer} />
        ))
      }
    </div>
  );
}

export default OffersList;
