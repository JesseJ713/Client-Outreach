import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

// amount in US cents
// token is callback function with token received from Stripe
// .. after Stripe authenticates card information
class Payments extends Component {
  render() {
    debugger;
    return (
      <StripeCheckout
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
