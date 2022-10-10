import { MAKE_RECIPE } from './types';

export const makeRecipe = (name: string) => ( {
  type: MAKE_RECIPE,
  name
})