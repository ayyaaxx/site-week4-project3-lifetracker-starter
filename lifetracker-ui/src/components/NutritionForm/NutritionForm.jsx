import React from 'react'
import { useState, useEffect } from "react"
import "./NutritionForm.css"

const NutritionForm = () => {
    const [nutrtion, setNutrtion] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [calories, setCalories] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

  return (
    <div className= "nutrition-form">
        <form onSubmit = {handleSubmit}>
        <label>Food:</label>
        <input
          className="nutrition-form-input"
          type="text"
          value={nutrtion}
          onChange={(e) => setNutrtion(e.target.value)}
          required
        />
        <label>Category</label>
        <input
          className="nutrition-form-input"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <label>Quantity</label>
        <input
          className="nutrition-form-input"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <label>Calories</label>
        <input
          className="nutrition-form-input"
          type="text"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
        <label>Image URL</label>
        <input
          className="nutrition-form-input"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        
        <button type="submit">Save</button>
      </form>
      
    </div>
  )
}

export default NutritionForm
