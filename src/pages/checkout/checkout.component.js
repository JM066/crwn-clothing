import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const Checkout = ({ cartItems, cartItemTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${cartItemTotal}</div>
    <div className="test-warning">
      *** Please use the following test credit card for payments***
      <br />
      4242 4242 4242 4242 - Exp: any future date - CVV: 123
    </div>
    <StripeCheckoutButton price={cartItemTotal} />
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartItemTotal: selectCartTotal(state),
});
export default connect(mapStateToProps)(Checkout);
