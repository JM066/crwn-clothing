import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { selectCollctions } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
const ShopPage = ({ collections }) => {
  console.log("collections", collections);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollctions,
});
export default connect(mapStateToProps)(ShopPage);
