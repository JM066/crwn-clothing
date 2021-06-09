import { createSelector } from "reselect";
import CartActionTypes from "./cart.types";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (accCartQuantity, cartItemCount) =>
        accCartQuantity + cartItemCount.quantity,
      0
    );
  }
);
