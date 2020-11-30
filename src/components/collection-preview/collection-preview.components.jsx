import React from "react";
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter((item, idx) => idx < 4).map(({id, ...otherItemprops}) => (
        // <div key={item.id}>{item.name}</div>
        <CollectionItem key={id} {...otherItemprops}></CollectionItem>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
