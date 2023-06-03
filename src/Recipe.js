import React from "react";

function Recipe({recipe, deleteRecipe}){
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt={recipe.name}></img></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <button name="delete" onClick={()=>{deleteRecipe(recipe)}}>Delete</button>
          </tr>
    )
}

export default Recipe