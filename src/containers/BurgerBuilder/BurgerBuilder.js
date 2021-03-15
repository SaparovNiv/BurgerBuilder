import React, { Component } from "react";
import BurgerIngredient from "../../components/Burger/BurgerIngredients/BurgerIngredient";
import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                 <BurgerIngredient/>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;