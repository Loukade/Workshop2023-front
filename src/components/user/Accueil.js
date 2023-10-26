import React from 'react';
import './Accueil.css';

function Accueil() {
    return (
        <div className="accueil-container">
                <h1>Bienvenue sur notre site</h1>
                <p>Notre site a pour but de...</p>
                <img src="/Public/images/logo.png" alt="Description de l'image" style={{width:'50%'}} />
        </div>
    );
}

export default Accueil;
