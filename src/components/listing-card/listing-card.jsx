import { useMemo } from 'react';

import Favorite from '../favorite/favorite';

import { getISODate, currencyFormatter } from '../../shared/utils';

import './listing-card.scss';

const className = 'listing-card';
const classNamePrefix = `${className}__`;

const ListingCard = ({ listing }) => {
  const { photos, property, listPrice, address, listDate, listingId } = listing;
  const { bedrooms, bathsFull, bathsHalf, area } = property;

  const totalBaths = useMemo(() => {
    switch (true) {
      case Boolean(bathsFull) && Boolean(bathsHalf):
        return bathsFull + bathsHalf / 2;
      case !Boolean(bathsFull) && Boolean(bathsHalf):
        return bathsHalf / 2;
      case Boolean(bathsFull) && !Boolean(bathsHalf):
        return bathsFull;
      default:
        return '--';
    }
  }, [bathsFull, bathsHalf]);

  const fullAddress = useMemo(() => {
    const { streetNumber, streetName, city, state } = address;
    return `${streetNumber} ${streetName}, ${city}, ${state}`;
  }, [address]);

  return (
    <li className={className}>
      <div className={`${classNamePrefix}image`}>
        <img src={photos[0]} alt={`Image of property at ${fullAddress}`} />
        <Favorite listingId={listingId} />
      </div>
      <ul className={`${classNamePrefix}info-list`}>
        <li>
          <span>{bedrooms ?? '--'} BR</span>
        </li>
        <li>
          <span>{totalBaths} Bath</span>
        </li>
        <li>
          <span>{area ?? '--'} Sq Ft</span>
        </li>
      </ul>
      <span className={`${classNamePrefix}price`}>
        <span>{listPrice ? currencyFormatter.format(listPrice) : '--'}</span>
      </span>
      <span className={`${classNamePrefix}address`}>
        {address ? fullAddress : '--'}
      </span>
      <div className={`${classNamePrefix}listDate`}>
        Listed: <span>{getISODate(listDate) ?? '--'}</span>
      </div>
    </li>
  );
};

export default ListingCard;
