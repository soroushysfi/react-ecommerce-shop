import React from 'react'

import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IWROlGNvay7oeTC6Fe1P0WYK4P4OvOuGjTn4MmunGRrOGP0HShMk2YwkTO7KnyrEl1gT6B0EDhYDvf48WYhbMKE00lRHZ9YUV'
    const onToken = token => {
        alert('Payment Done!')
        console.log(token)
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        currency="CAD"
        bitcoin
        >
            
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;
