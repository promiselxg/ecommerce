/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
  cart: JSON.parse(localStorage.getItem('cart')) || null,
  loading: false,
  error: null,
};

export const AddToCartContext = createContext(INITIAL_STATE);

const AddToCartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART_START':
      return {
        cart: null,
        loading: true,
        error: null,
      };
    case 'ADD_TO_CART_SUCCESS':
      return {
        cart: action.payload,
        loading: false,
        error: null,
      };
    case 'ADD_TO_CART_FAILED':
      return {
        cart: null,
        loading: false,
        error: action.payload,
      };
    case 'REMOVE_ITEM_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'REMOVE_ITEM_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };
    case 'REMOVE_ITEM_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const AddToCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddToCartReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AddToCartContext.Provider
      value={{
        cart: state.cart,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AddToCartContext.Provider>
  );
};
