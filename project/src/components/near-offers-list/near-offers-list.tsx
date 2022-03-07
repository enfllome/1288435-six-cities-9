import { useState } from 'react';
import Offer from '../../types/offers';
import NearOffersItem from '../near-offers-item/near-offers-item';

type NearOffersListProps = {
  offers: Array<Offer>,
}

function NearOffersList ({ offers }: NearOffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');
  // eslint-disable-next-line no-console
  console.log(activeCard);

  const updateData = (value: string) => {
    setActiveCard(value);
  };

  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer) => (
          <NearOffersItem key={offer.id} updateData={updateData} offer={offer} />
        ))
      }
    </div>
  );
}

export default NearOffersList;
