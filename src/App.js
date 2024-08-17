import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import Recipe from "./models/Recipe";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe])
  }

  const deleteRecipe = (indexToDelete) => {
    console.log(`[DELETE] I'll be back: ${indexToDelete}`)
    setRecipes(recipes.filter((ignoreMeh, index) => index !== indexToDelete));
  }


  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />

    </div>
  );
}

export default App;
