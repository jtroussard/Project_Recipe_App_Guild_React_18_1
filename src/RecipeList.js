import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, addRecipe, deleteRecipe }) {
  // console.log(deleteRecipe)
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? { backgroundColor: "#f5f5dc" } : { backgroundColor: "#ffffff" }}>
              <RecipeView item={item} />
              <td>
                <button name="delete" onClick={() => deleteRecipe(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
