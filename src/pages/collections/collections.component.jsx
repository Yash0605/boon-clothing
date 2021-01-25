import React from "react";
import { connect } from "react-redux";
import { collectionPageSelector } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collections.styles.scss";

const CollectionsPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionPageSelector(ownProps.match.params.collectionsId)(
    state
  ),
});

export default connect(mapStateToProps)(CollectionsPage);
