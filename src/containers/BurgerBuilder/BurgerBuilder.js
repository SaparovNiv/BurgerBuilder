import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Aux";

const INGREDIENT_PRICES = {
    Salad: 0.5,
    Bacon: 1.3,
    Cheese: 0.9,
    Meat: 2.5
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        },
        totalPrice: 4,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    addIngredientHandler = (type) => {
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type]++;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ totalPrice: updatedPrice, ingredients: updateIngredients });
    }

    removeIngredientHandler = (type) => {
        const updateIngredients = {
            ...this.state.ingredients
        };

        if (updateIngredients[type] > 0) {
            updateIngredients[type]--;
            const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({ totalPrice: updatedPrice, ingredients: updateIngredients });
        }
    }


    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice} 
                    ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;