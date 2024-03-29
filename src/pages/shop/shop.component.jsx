import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component.js";
import { Route } from "react-router-dom";
import CollectionPage from "../category/collection.component.js";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
