import React, { useState, useEffect } from 'react';
import IngredientList from './IngredientList';
import RecipeBuilder from './RecipeBuilder';
import RecipeSummary from './RecipeSummary';

function CreateRecipe({ onSaveRecipe }) {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipeName, setRecipeName] = useState('');
    const [nutritionScore, setNutritionScore] = useState(0);

    useEffect(() => {
    // Calculate nutrition score based on selected ingredients
    const score = selectedIngredients.reduce((total, ing) => total + ing.quantity * ing.nutritionValue, 0);
    setNutritionScore(Math.round(score * 10) / 10);
    }, [selectedIngredients]);

    const handleSaveRecipe = () => {
    if (recipeName && selectedIngredients.length > 0) {
        onSaveRecipe({
        name: recipeName,
        ingredients: selectedIngredients,
        nutritionScore
        });
    }
    };

    return (
    <div>
        <h2 className="mb-4">Crear Receta</h2>
        <div className="row">
        <div className="col-md-6">
            <IngredientList
            onSelectIngredient={(ingredient) =>
                setSelectedIngredients([...selectedIngredients, { ...ingredient, quantity: 1 }])
            }
            />
        </div>
        <div className="col-md-6">
            <RecipeBuilder
            ingredients={selectedIngredients}
            onUpdateQuantity={(index, quantity) => {
                const updatedIngredients = [...selectedIngredients];
                updatedIngredients[index].quantity = quantity;
                setSelectedIngredients(updatedIngredients);
            }}
            />
            <RecipeSummary
            recipeName={recipeName}
            onUpdateName={setRecipeName}
            nutritionScore={nutritionScore}
            />
            <button className="btn btn-success mt-3" onClick={handleSaveRecipe}>
            Guardar Receta
            </button>
        </div>
        </div>
    </div>
    );
}

export default CreateRecipe;

