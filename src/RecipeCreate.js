import React, { useState } from "react";
import Recipe from "./models/Recipe";

function RecipeCreate({ addRecipe }) {

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = ({ target }) => {
    // console.log(target)
    setFormData({
      ...formData,
      [target.name]: [target.value]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newRecipe = new Recipe(formData)
    console.log(`[CREATE] What's cooking doc? ${newRecipe}`)
    addRecipe(newRecipe);
    setFormData(initialState)
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                value={formData.name}
                type="text"
                onChange={handleChange}
                placeholder="Name">
              </input>
            </td>
            <td>
              <input
                name="cuisine"
                value={formData.cuisine}
                type="text"
                onChange={handleChange}
                placeholder="Cuisine">
              </input>
            </td>
            <td>
              <input
                name="photo"
                value={formData.photo}
                type="text"
                onChange={handleChange}
                placeholder="URL">
              </input>
            </td>
            <td>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                type="text"
                onChange={handleChange}
                placeholder="Ingredients">
              </textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                value={formData.preparation}
                type="text"
                onChange={handleChange}
                placeholder="Preparation">
              </textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
