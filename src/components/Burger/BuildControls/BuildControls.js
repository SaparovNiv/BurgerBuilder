import React from 'react';
import ingredients from '../BurgerIngredients/BurgerIngredientsConstants';
import classes from './BuildConstrols.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = Object.keys(ingredients).map(key => {
    return {
        label: ingredients[key],
        type: ingredients[key]
    };
}).filter(elem =>
    elem.type !== 'BreadBottom' && elem.type !== 'BreadTop'
)

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: {props.price.toFixed(2)}$</p>
        {controls.map(ctrl => {
            return (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                />
            )
        })}
        <button
            className={classes.OrderButton}
            onClick={props.ordered}>
            ORDER NOW</button>
    </div>
);

export default buildControls;