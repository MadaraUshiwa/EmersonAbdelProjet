import { useState } from "react";
import { login } from "../../features/LoginSlice/LoginSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Connexion.css";


function Connexion() {
    const dispatch = useDispatch();
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login({ pseudo, email, password }));
      navigate("/home");
    };
    
    return (
        
        <div className="connexion-principale">
        <div className="titre-site">
            <h1>Candy Shop</h1>
        </div>
            <div>
            <div className="titre-connexion">
                <h1>Se connecter</h1>
            </div>    
            <div className="connexion">
                <form onSubmit={handleSubmit}>
                    <label>
                    Identifiant/Guest:
                    <input className="input-position" type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
                    </label>
                    <label>
                    Email:
                    <input className="input-position" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                    Mot de passe:
                    <input className="input-position" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <input className="input-submit" type="submit" value="Se connecter" />
                </form>
            </div>
            </div>
        </div>
      );
    }

export default Connexion;    