/* eslint-disable no-case-declarations */
import { MAKE_INGREDIENT, MAKE_RECIPE } from '../../actions/types';

const initialState = {
  recipes: [ { name: 'Omelette' } ],
  ingredients: [ { recipe: 'Omelette', name: 'Egg', quantity: 2 } ]
};

const recipesReducer = ( recipes , action ) => {
  switch ( action.type )
  {
    case MAKE_RECIPE:
      return recipes.concat( { name: action.name } );
  }
  return recipes;
};

const ingredientsReducer = ( ingredients, action ) => {
  switch ( action.type )
  {
    case MAKE_INGREDIENT:
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity
      };
      return ingredients.concat( newIngredient );
  }
  return ingredients;
};


export const rootReducer = ( state = initialState, action ) =>
{
  const newRecipe = {
    recipes: recipesReducer( state.recipes, action ),
    ingredients: ingredientsReducer( state.ingredients, action )
  }
  return  {...state, ...newRecipe }
};


