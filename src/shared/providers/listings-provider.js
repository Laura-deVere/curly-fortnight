import React, { createContext, useReducer, useEffect } from 'react';

import ApiListings from '../../services/api-listings';
import LocalStorage from 'shared/local-storage';

const ListingsContext = createContext(null);

const ACTIONS = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  GET_LISTINGS: 'GET_LISTINGS',
  GET_FAVORITES: 'GET_FAVORITES',
};

const initialState = {
  listings: null,
  favorites: {},
};

function listingsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.GET_LISTINGS: {
      return {
        ...state,
        listings: payload,
      };
    }
    case ACTIONS.GET_FAVORITES: {
      return {
        ...state,
        favorites: payload,
      };
    }
    case ACTIONS.ADD_FAVORITE: {
      const newFavorites = { ...state.favorites };
      newFavorites[payload] = true;
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case ACTIONS.REMOVE_FAVORITE: {
      const newFavorites = { ...state.favorites };
      delete newFavorites[payload];
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    default:
      return state;
  }
}

const ListingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listingsReducer, initialState);

  const favoritesStore = new LocalStorage('favorites');
  const listingsStore = new LocalStorage('listings');

  useEffect(() => {
    const storedFavorites = favoritesStore.getItems();
    const storedListings = listingsStore.getItems();
    dispatch({ type: ACTIONS.GET_FAVORITES, payload: storedFavorites ?? {} });
    if (storedListings) {
      dispatch({ type: ACTIONS.GET_LISTINGS, payload: storedListings });
      return;
    }

    ApiListings.getListings()
      .then((response) => {
        listingsStore.setItems(response);
        dispatch({ type: ACTIONS.GET_LISTINGS, payload: response });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.GET_LISTINGS, payload: [] });
      });
  }, []);

  const addFavorite = async (listingId) => {
    const favorites = favoritesStore.getItems();
    const newFavorites = { ...favorites, [listingId]: true };
    favoritesStore.setItems(newFavorites);
    dispatch({ type: ACTIONS.ADD_FAVORITE, payload: listingId });
  };

  const removeFavorite = async (listingId) => {
    const favorites = favoritesStore.getItems();
    const newFavorites = { ...favorites };
    delete newFavorites[listingId];
    favoritesStore.setItems(newFavorites);
    dispatch({ type: ACTIONS.REMOVE_FAVORITE, payload: listingId });
  };

  const value = {
    listings: state.listings,
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <ListingsContext.Provider value={value}>
      {!state.listings ? <p>Loading...</p> : children}
    </ListingsContext.Provider>
  );
};

export { ListingsContext, ListingsProvider };
