import React from "react";

import "./collection-preview.style.scss";

interface item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface props {
  title: string;
  items: item[];
  routeName: string;
}

const CollectionPreview: React.FunctionComponent<props> = ({
  title,
  items,
}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
