import { useDispatch, useSelector } from 'react-redux';
// import { makeIngredient } from '../storage/actions/ingredients';
import { makeRecipe } from '../storage/actions/recipes';

export const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.pokemons);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('handle');
    dispatch(makeRecipe('meals'));
  };

  return (
    <>
      recipes
      <input type="text" name="recipe" />
      <button type="submit" onClick={(e) => handleClick(e)}>
        submit
      </button>
      <ul>
        {recipes?.map((recipe: { name: string }) => (
          <>{recipe.name}</>
        ))}
      </ul>
    </>
  );
};
