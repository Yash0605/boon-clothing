import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const shopCollectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const shopCollectionsSelectorOverView = createSelector(
  [shopCollectionsSelector],
  (collectionItems) => Object.keys(collectionItems).map((key) => collectionItems[key])
);

export const collectionPageSelector = (collectionUrlParam) =>
  createSelector(
    [shopCollectionsSelector],
    (collections) => collections[collectionUrlParam]
  );
