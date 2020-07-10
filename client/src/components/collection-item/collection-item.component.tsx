import React from "react";

import "./collection-item.style.scss";

interface Props {
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionItem: React.FunctionComponent<Props> = ({
  name,
  price,
  imageUrl,
}) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
