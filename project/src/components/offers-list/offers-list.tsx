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
          <OfferItem key={offer.id} previewImage={offer.previewImage} price={offer.price} title={offer.title} type={offer.type}/>
        ))
      }
    </div>
  );
}

export default OffersList;
