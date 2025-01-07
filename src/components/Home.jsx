import React from 'react';

function Home() {
    return (
    <div className="container-fluid, text-center, flex-row mb-4, align-items-center"
    style={{ alignItems:'center', gap:'30px' , paddingBottom: '30px' , paddingTop: '40px', justifyItems:'center'}}>
        <img
        style={{maxWidth: '600px', paddingBottom: '30px'}}
        src="../multimedia/hero.png" alt="imagen-hero" />
        <h1 className="mb-4"
        style={{maxWidth: '500px', textAlign:'center'}}>Bienvenido a Cocinando tu Receta</h1>
        <p className="mb-4"
        style={{ maxWidth: '600px', maxHeight: '300px', textAlign: 'center', justifyContent:'center', alignItems:'center' }}>
        Descubre una manera fácil y divertida de crear tus propias recetas personalizadas. 
        Con nuestra herramienta, podrás seleccionar tus ingredientes favoritos y ver el puntaje nutricional en tiempo real, 
        lo que te ayudará a tomar decisiones más saludables.
        <strong>¡Haz que cada comida se ajuste a tus necesidades y objetivos nutricionales!</strong>
        </p>
    </div>
    );
}

export default Home;

