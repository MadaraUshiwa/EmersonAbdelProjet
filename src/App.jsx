import './App.css';
import {Routes,Route,Link,Outlet} from 'react-router-dom'
import Home from './components/Home/Home'
import Connexion from './components/Connexion/Connexion'
import Categorie from './components/Categorie/Categorie'
import Panier from './components/Panier/Panier'
import Produit_details from './components/ProduitDetail/ProduitDetail'
import Error from './components/Error/error';

function App() {
    return (
        <div className='App'>
            <div className="nav">
                <nav>
                    <ul>
                        <li><Link className='Link' to={"/"}><img className='logosite' src={'../'+process.env.PUBLIC_URL + "./img/logosite-removebg.png"} alt="" /> </Link></li>
                        <li><Link className='Link' to={"Category/Candy"}>Candy</Link></li>
                        <li><Link className='Link' to={"Category/Chips"}>Chips</Link></li>
                        <li><Link className='Link' to={"Category/Chocolat"}>Chocolat</Link></li>
                        <li><Link className='Link' to={"Category/Ice Cream"}>Ice Cream</Link></li>
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
                    </div>
                </div>
            </div>    
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='Category/:category' element={<Categorie />}/>
                    <Route path='Category/:category/details/:id/:brand/:produit' element={<Produit_details/>}/>
                    <Route path='Login' element={<Connexion/>}/>
                    <Route path='Panier' element={<Panier/>}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;

