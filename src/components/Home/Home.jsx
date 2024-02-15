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
            <div className="carrousel">
                {produits.map((produit, index) => (
                    <div key={produit.id} className={index === currentIndex ? 'slide active' : 'slide'}>
                        <img src={produit.img} alt={produit.name} />
                        <div className='carrousel-test'>
                            <span>{produit.name}</span>
                            <span>{produit.prix} €</span>
                        </div>
                    </div>
                ))}
                <button className="prev" onClick={prevSlide}>Précédent</button>
                <button className="next" onClick={nextSlide}>Suivant</button>
            </div>
        </div>
    );
}

export default Home;