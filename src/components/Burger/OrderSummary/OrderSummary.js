import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return props.ingredients[igKey] > 0 ? <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li> : null
        })
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A great burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}$</strong></p>
            <p>Continue to checkout</p>
            <Button btnType='Danger' click={props.cancelOrder}>Cancel</Button>
            <Button btnType='Success' click={props.makeOrder}>Continue</Button>
        </Aux>
    )
};

export default orderSummary;