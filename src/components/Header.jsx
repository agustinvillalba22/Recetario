import React from 'react';

const Header = ({ changeView }) => {
    return (
    <header className="d-flex justify-content-between align-items-center px-4 py-2 bg-light shadow">
      {/* Logo */}
        <div className="d-flex align-items-center">
        <h1 
        className="h5 mb-0"
        onClick={() => changeView('Home')}>Recetari<i class="bi bi-egg-fried"></i></h1>
        </div>

      {/* Navegación */}
        <nav className="d-flex align-items-center mw-300px"
        >
        <button
            className="btn text-decoration-none me-3 btn-primary"
            onClick={() => changeView('create-recipe')}
        >
            <i className="bi bi-plus-circle me-2"></i> Crear Receta
        </button>
        <button
            className="btn btn-link text-decoration-none text-dark me-3"
            onClick={() => changeView('recipe-history')}
        >
            <i className="bi bi-journal-text me-2"></i> Mis Recetas
        </button>

        {/* Perfil */}
        <div className="d-flex align-items-center">
            <img
            src="/multimedia/profile-picture.png"
            alt="Perfil"
            className="rounded-circle"
            style={{ height: '40px', width: '40px' }}
            />
        </div>
        </nav>
    </header>
    );
};

export default Header;

