import { Recipe } from "../components/Recipes";
import Grid from "@mui/material/Grid"; // or '@mui/material/Grid'
import "../css/RecipeOutline.scss";

interface FishSoupProps {
  recipe: Recipe;
}

function FishSoup({ recipe }: FishSoupProps) {
  return (
    <Grid container rowSpacing={12} columnSpacing={{ sm: 5 }}>
      <Grid item sm={4} id="header">
        <img src={recipe.image} alt="Fish Soup" />
      </Grid>
      <Grid item sm={4} id="ingredients">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </Grid>
      <Grid item sm={4} id="instructions">
        <h2>Instructions</h2>
        <ul>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default FishSoup;
