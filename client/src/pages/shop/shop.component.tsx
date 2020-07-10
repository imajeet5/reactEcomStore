import React from "react";

import SHOP_DATA from "../../data/shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };
  constructor(props: any) {
    super(props);
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
