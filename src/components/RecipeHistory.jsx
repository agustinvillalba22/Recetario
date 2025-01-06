import React from 'react';

function RecipeHistory({ recipes, onDeleteRecipe }) {
    return (
    <div>
        <h2 className="mb-4">Historial de Recetas</h2>
        {recipes.length === 0 ? (
        <p>No tienes recetas guardadas aún. ¡Comienza a crear tus recetas!</p>
        ) : (
        recipes.map((recipe, index) => (
            <div key={index} className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">Puntaje Nutricional: {recipe.nutritionScore}</p>
                <ul>
                {recipe.ingredients.map((ing, i) => (
                    <li key={i}>
                    {ing.name}: {ing.quantity}
                    </li>
                ))}
                </ul>
                <button className="btn btn-danger" onClick={() => onDeleteRecipe(index)}>
                Eliminar
                </button>
            </div>
            </div>
        ))
        )}
    </div>
    );
}

export default RecipeHistory;

