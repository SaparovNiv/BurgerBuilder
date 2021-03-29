import classes from './BurgerIngredient.module.css';
import React, { Component } from 'react';
import ingredients from './BurgerIngredientsConstants';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        if (this.props.type === ingredients.BREAD_TOP) {
            ingredient = (
                <div className={classes[this.props.type]}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
        } else {
            ingredient = <div className={classes[this.props.type]}></div>;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};
export default BurgerIngredient;