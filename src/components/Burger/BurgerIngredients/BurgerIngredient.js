import classes from './BurgerIngredient.module.css';
import React from 'react';
import ingredients from './BurgerIngredientsConstants'

const burgerIngredient = (props) => {
    let ingredient = null;

    if(props.type === ingredients.BREAD_TOP){
        ingredients = (
            <div className={classes[props.type]}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
        );
    }else{
        ingredient = <div className={classes[props.type]}></div>;
    }
    return ingredient;
};

export default burgerIngredient;