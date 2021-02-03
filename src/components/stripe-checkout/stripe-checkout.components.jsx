import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const publishableKey = 'pk_test_51IE59OBBTbHAZiMv2hS27AEbWe2aCIqeixODRrI4ebd5Uq2sqC4gIwvqXm1ePEKc5OOn16P0pgPHnbrsRLCp0jau00jCyWoZjx';
    const priceForStripe = price*100;

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='BOON Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        ></StripeCheckout>
    );
}

export default StripeCheckoutButton;