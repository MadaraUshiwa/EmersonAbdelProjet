import './App.css';
import {Routes,Route,Link,Outlet} from 'react-router-dom'
import Home from './components/Home/Home'
import Connexion from './components/Connexion/Connexion'
import Categorie from './components/Categorie/Categorie'
import Panier from './components/Panier/Panier'
import Produit_details from './components/ProduitDetail/ProduitDetail'
import Error from './components/Error/error';
import { useDispatch, useSelector } from 'react-redux';
import img_logo from './IMG/logosite-removebg.png'
import { add_cat } from './features/DataSlice/DataSlice';

function App() {
    const sub_data = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    console.log(sub_data);
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
                <div className="login_top">
                    <div className="title">
                        PAPICHULO CAND'S
                    </div>
                    <div className="serahc">
                        <input type="text" />
                    </div>
                    <div className="test-panier">
                        <button className=''>
                        <Link  to={"Login"}>Login</Link>
                        </button>
                        <button>
                        <Link  to={"Panier"}>Panier</Link>
                        </button>
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

