import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

// amount in US cents
// token is callback function with token received from Stripe
// .. after Stripe authenticates card information
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Client Outreach"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
