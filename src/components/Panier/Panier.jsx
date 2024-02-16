import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DecreseQuantity, increaseQuantity, removeFromCart, ClearCart } from '../../features/DataSlice/DataSlice';
import './Panier.css';

const Panier = () => {
const dispatch = useDispatch();
const panier = useSelector((state) => state.data.panier);
const handlePayment = () => {
    dispatch(ClearCart());
  };

const total = panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);
    console.log(panier);
  return (
    <div className="panier-principale">
        <div className="panier">
        <h2>Votre Panier</h2>
        {panier.length === 0 ? (
            <p>Votre panier est vide</p>
        ) : (
            panier.map((item) => (
            <div key={item.id} className="panier-item">
                <img src={item.img} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
                <p>{item.prix}€</p>
                <p>Quantité : {item.quantite}</p>
            </div>
            <div>
                <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                <button onClick={() => dispatch(DecreseQuantity(item))}>-</button>
                <button onClick={() => dispatch(removeFromCart(item))}>Supprimer</button>
            </div>
            </div>
            ))
        )}
        <div className='panier-total'>
            <p>Total : {total}€</p>
            <p><button className='button-payer' onClick={handlePayment}>Payer</button></p>
        </div> 
        </div>
   
    </div>
  );
};

export default Panier;