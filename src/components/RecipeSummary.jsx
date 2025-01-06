import React from 'react';

function RecipeSummary({ recipeName, onUpdateName, nutritionScore }) {
    return (
    <div className="mt-4">
        <h3>Resumen de la Receta</h3>
        <input
        type="text"
        className="form-control mb-2"
        placeholder="Nombre de la receta"
        value={recipeName}
        onChange={(e) => onUpdateName(e.target.value)}
        />
        <p>Puntaje Nutricional: {nutritionScore}</p>
    </div>
    );
}

export default RecipeSummary;

