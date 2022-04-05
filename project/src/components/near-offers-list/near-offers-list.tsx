
import Offer from '../../types/offers';
import NearOffersItem from '../near-offers-item/near-offers-item';

type NearOffersListProps = {
  offers: Array<Offer>,
}

function NearOffersList ({ offers }: NearOffersListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer) => (
          <NearOffersItem key={offer.id} offer={offer} />
        ))
      }
    </div>
  );
}

export default NearOffersList;
