import React from 'react';

function RecipeBuilder({ ingredients, onUpdateQuantity }) {
    return (
    <div>
        <h3>Ingredientes Seleccionados</h3>
        <ul className="list-group">
        {ingredients.map((ing, index) => (
            <li key={ing.id} className="list-group-item d-flex justify-content-between align-items-center">
            {ing.name}
            <input
                type="number"
                className="form-control w-25"
                value={ing.quantity}
                onChange={(e) => onUpdateQuantity(index, Number(e.target.value))}
                min="1"
            />
            </li>
        ))}
        </ul>
    </div>
    );
}

export default RecipeBuilder;

