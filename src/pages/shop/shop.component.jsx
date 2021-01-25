import React from "react";
import "./shop.styles.scss";
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionsPage from '../collections/collections.component';
import { Route } from "react-router-dom";

const ShopPage = ({match}) => (
  <div className="shop">
   {/* <CollectionOverview></CollectionOverview> */}
   <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
   <Route path={`${match.path}/:collectionsId`} component={CollectionsPage}></Route>
  </div>
);

export default ShopPage;
