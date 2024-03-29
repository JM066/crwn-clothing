import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    Object.keys(collections).map((collection) => collections[collection])
);
export const selectCollection = memoize((collectionParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionParam]
  )
);
