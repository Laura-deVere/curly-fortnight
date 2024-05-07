import { useContext } from 'react';

import ListingCard from '../listing-card/listing-card';
import { ListingsContext } from '../../shared/providers/listings-provider';

import './properties-list.scss';

const className = 'properties-list';

const PropertiesList = () => {
  const { listings } = useContext(ListingsContext);
  return (
    <ul className={className}>
      {listings.map((listing) => {
        const { listingId } = listing;
        return <ListingCard key={listingId} listing={listing} />;
      })}
    </ul>
  );
};

export default PropertiesList;
