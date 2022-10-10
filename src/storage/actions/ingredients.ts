import { MAKE_INGREDIENT } from "./types";

export const makeIngredient = (recipe: string, name:string, quantity: number) =>({
  type: MAKE_INGREDIENT,
  recipe,
  name,
  quantity
})
