import React from "react";
import CollectionPreview from '../collection-preview/collection-preview.components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {shopCollectionsSelectorOverView} from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: shopCollectionsSelectorOverView
});

export default connect(mapStateToProps)(CollectionOverview);
