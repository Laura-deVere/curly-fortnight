import { useContext } from 'react';
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';

import { ListingsContext } from '../../shared/providers/listings-provider';

import './favorite.scss';

const className = 'favorite-btn';

const Favorite = ({ listingId }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(ListingsContext);
  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        favorites[listingId]
          ? removeFavorite(listingId)
          : addFavorite(listingId)
      }
    >
      {favorites[listingId] ? (
        <img
          src={heartFill}
          alt="favorite icon"
          onClick={() => removeFavorite(listingId)}
        />
      ) : (
        <img
          src={heartStroke}
          alt="unfavorite icon"
          onClick={() => addFavorite(listingId)}
        />
      )}
    </button>
  );
};

export default Favorite;
