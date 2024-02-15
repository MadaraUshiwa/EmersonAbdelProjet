import './App.css';
import {Routes,Route,Link,Outlet} from 'react-router-dom'
import Home from './components/Home/Home'
import Connexion from './components/Connexion/Connexion'
import Categorie from './components/Categorie/Categorie'
import Panier from './components/Panier/Panier'
import Produit_details from './components/ProduitDetail/ProduitDetail'
function App() {
    return (
        <div className='App'>
            <div className="nav">
                <div className="">
                    <Link className='Link' to={"/"}>Home</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link className='Link' to={"Category/Candy"}>Candy</Link></li>
                        <li><Link className='Link' to={"Category/Chips"}>Chips</Link></li>
                        <li><Link className='Link' to={"Category/Chocolat"}>Chocolat</Link></li>
                        <li><Link className='Link' to={"Category/Ice Cream"}>Ice Cream</Link></li>
                    </ul>
                </nav>
                <div className="">
                    <button className=''>
                    <Link  className='Link'to={"Login"}>Login</Link>
                    </button>
                </div>
            </div>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='Category/Candy' element={<Categorie choix={'Candy'}/>}/>
                    <Route path='Category/Chips' element={<Categorie choix={'Chips'}/>}/>
                    <Route path='Category/Chocolat' element={<Categorie choix={'Chocolat'}/>}/>
                    <Route path='Category/Ice Cream' element={<Categorie choix={'Ice Cream'}/>}/>
                    <Route path='Login' element={<Connexion />}/>
                </Routes>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;

