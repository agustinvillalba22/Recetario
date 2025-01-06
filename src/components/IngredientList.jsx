import React from 'react';

const ingredients = [
    { id: 1, name: 'Pollo', category: 'Proteínas', nutritionValue: 2.5 },
    { id: 2, name: 'Arroz', category: 'Carbohidratos', nutritionValue: 1.5 },
    { id: 3, name: 'Zanahoria', category: 'Vegetales', nutritionValue: 0.5 },
    { id: 4, name: 'Tomate', category: 'Vegetales', nutritionValue: 0.3 },
    { id: 5, name: 'Pasta', category: 'Carbohidratos', nutritionValue: 2 },
];

function IngredientList({ onSelectIngredient }) {
    return (
    <div>
        <h3>Ingredientes Disponibles</h3>
        {['Proteínas', 'Carbohidratos', 'Vegetales'].map(category => (
        <div key={category}>
            <h4>{category}</h4>
            <ul className="list-group">
            {ingredients
                .filter(ing => ing.category === category)
                .map(ing => (
                <li key={ing.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {ing.name}
                    <button className="btn btn-sm btn-primary" onClick={() => onSelectIngredient(ing)}>
                    Agregar
                    </button>
                </li>
                ))}
            </ul>
        </div>
        ))}
    </div>
    );
}

export default IngredientList;

