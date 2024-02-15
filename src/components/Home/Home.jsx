import './Home.css';
import React, { useState, useEffect } from 'react';
import data from '../../data.json';

function Home(props) {
    const [produits, setProduits] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const produitsAleatoires = [...data].sort(() => 0.5 - Math.random()).slice(0, 4);
        setProduits(produitsAleatoires);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % produits.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + produits.length) % produits.length);
    };

    return (
        <div className="home">
            <div className='home-livraison'>
                <p>Livraison OFFERTE dans toute la Belgique dès 50€ d’achat </p>
            </div>   
            <div className='home-nomdusite'>
                <h1>Papi Chulo</h1><span className='span-home'>Candy's</span>
            </div>
            <div className="carrousel">
                {produits.map((produit, index) => (
                    <div key={produit.id} className={index === currentIndex ? 'slide active' : 'slide'}>
                        <img src={produit.image} alt={produit.name} />
                        <p>{produit.name}</p>
                        <p>{produit.prix}</p>
                    </div>
                ))}
                <button className="prev" onClick={prevSlide}>Précédent</button>
                <button className="next" onClick={nextSlide}>Suivant</button>
            </div>
        </div>
    );
}

export default Home;