import './Home.css';
import React from 'react';

function Home(props) {
    return (
        <div className="home">
            <div className='home-livraison'>
                <p>Livraison OFFERTE dans toute la Belgique dès 50€ d’achat </p>
            </div>   
            <div className='home-nomdusite'>
                <h1>Papi Chulo</h1><span className='span-home'>Candy's</span>
            </div>
        

        </div>



    );
}

export default Home;
