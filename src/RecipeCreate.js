import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes, addRecipeHandler}) {
  const initialData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState(initialData)

  function handleChange(event){
    setFormData({
      ...formData, [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    addRecipeHandler({...formData})
    setFormData(initialData)
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" placeholder="Name" onChange={handleChange} value={formData.name}/>
            </td>
            <td>
              <input name="cuisine" type="text" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}/>
            </td>
            <td>
              <input name="photo" type="url" placeholder="URL" onChange={handleChange} value={formData.photo}/>
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}/>
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation}/>
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
