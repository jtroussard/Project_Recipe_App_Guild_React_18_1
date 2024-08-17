import React from "react";

function RecipeView({ item }) {

    return (
        <>
            <td>{item.name}</td>
            <td>{item.cuisine}</td>
            <td>
                <img
                    src={item.photo}
                    alt="recipe"
                    style={{ width: "80px", height: "80px" }}
                />
            </td>
            <td>{item.ingredients}</td>
            <td>{item.preparation}</td>
        </>
    )
}

export default RecipeView
