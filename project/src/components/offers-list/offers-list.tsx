import { useState } from 'react';
import Offer from '../../types/offers';
import OfferItem from '../offers-item/offers-item';

type OffersListProps = {
  offers: Array<Offer>,
}

function OffersList ({ offers }: OffersListProps):JSX.Element {

  const [activeCard, setActiveCard] = useState('');
  // eslint-disable-next-line no-console
  console.log(activeCard);

  const updateData = (value: string) => {
    setActiveCard(value);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferItem key={offer.id} updateData={updateData} {...offer} />
        ))
      }
    </div>
  );
}

export default OffersList;
