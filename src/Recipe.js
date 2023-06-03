import React from "react";

function Recipe({recipe}){
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo}></img></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <button name="delete">Delete</button>
          </tr>
    )
}

export default Recipe