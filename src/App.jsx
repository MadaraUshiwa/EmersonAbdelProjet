import './App.css';
import {Routes,Route,Link,Outlet} from 'react-router-dom'
import Home from './components/Home/Home'
import Connexion from './components/Connexion/Connexion'
import Categorie from './components/Categorie/Categorie'
import Panier from './components/Panier/Panier'
import Produit_details from './components/ProduitDetail/ProduitDetail'
import Error from './components/Error/error';
import { useSelector } from 'react-redux';
import img_logo from '../src/IMG/logosite-removebg.png'


function App() {
    const pseudo = useSelector((state) => state.login.pseudo);
    return (
        <div className='App'>
            <div className="nav">
                <nav>
                    <ul>
                        <li><Link className='Link' to={"/"}><img className='logosite' src={img_logo} alt="" /> </Link></li>
                        <li><Link className='Link' to={"Category/Candy"} >Candy</Link></li>
                        <li><Link className='Link' to={"Category/Chips"}  >Chips</Link></li>
                        <li><Link className='Link' to={"Category/Chocolat"}  >Chocolat</Link></li>
                        <li><Link className='Link' to={"Category/Ice Cream"}  >Ice Cream</Link></li>
                    </ul>
                </nav>

            </div>
            <div className="content">
            <div className='login-test'>
                <div className="login_top">
                    <div className="title">
                        <p>PAPICHULO</p> <p>CANDY'S</p>
                    </div>
                    <div className='login-panier'>
                            <button className='button-login'>
                            <Link  to={"Login"}>S'identifié</Link>
                            </button>
                            <button className='button-panier'>
                            <img src="../img/panier.png" alt="" />
                            <Link  to={"Panier"}>Panier</Link>
                            </button>
                            <div className='utilisateur'>
                                <p>Bienvenue à toi cher {pseudo}</p>
                            </div>
                    </div>
                </div>
            </div>  
            <div className="zone_affichage">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='Category/:category' element={<Categorie />}/>
                <Route path='Category/:category/details/:id/:brand/:produit' element={<Produit_details/>}/>
                <Route path='Login' element={<Connexion/>}/>
                <Route path='Panier' element={<Panier/>}/>
                <Route path='*' element={<Error />}/>
            </Routes>
            <div className="div_top_all">
            <Outlet/>
            </div>
            </div>  
            </div>
        </div>
    );
}

export default App;

