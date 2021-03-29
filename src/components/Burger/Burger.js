import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    // Check if our array is empty 

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="BreadTop" />
            {transformedIngredients}
            <BurgerIngredient type="BreadBottom" />
        </div>
    )
}
export default burger;