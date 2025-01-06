import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import RecipeHistory from './components/RecipeHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    setSavedRecipes(storedRecipes);
  }, []);

  const saveRecipe = (recipe) => {
    const updatedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = savedRecipes.filter((_, i) => i !== index);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header changeView={changeView} />
      <div className="container mt-4 flex-grow-1">
        {currentView === 'home' && <Home onCreateRecipe={() => changeView('create-recipe')} />}
        {currentView === 'create-recipe' && (
          <CreateRecipe
            onSaveRecipe={(recipe) => {
              saveRecipe(recipe);
              changeView('recipe-history');
            }}
          />
        )}
        {currentView === 'recipe-history' && (
          <RecipeHistory
            recipes={savedRecipes}
            onDeleteRecipe={deleteRecipe}
            onBackToHome={() => changeView('home')}
          />
        )}
      </div>
    </div>
  );
}

export default App;

