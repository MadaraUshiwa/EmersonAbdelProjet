import './Categorie.css'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom';
export default function Categorie(){
  const {category,brand,id,produit}= useParams()
  const sub_data = useSelector((state)=>state.data)
 const dispatch = useDispatch()
 console.log(sub_data);
 console.log(category+"-------------------------------");
 return(
  <>
   <div className="category_div">
    {/* <div className="top_cat">
      <h1>{category}</h1>
      {(sub_data.produits.filter((elem,i,array)=> array.indexOf(elem.category)=== elem.id)).map((item)=>
      <div className="">
        <h2>{item.brand}</h2>
      </div>
      )}
    </div> */}
    {/* <h2>here{sub_data.produits[0].name}</h2> */}
    <div  className="card">
    {sub_data.produits.filter((cat)=>cat.category === category).map((elem,i)=>
      <div key={i} className="card_body">
       <Link className="click_zone" id={elem.id} to={`details/${elem.id}/${elem.brand}/${elem.name}`}></Link>
       <div className="img">
        <img src={elem.img} alt="" />
       </div>
       <div className="details">
        <h4>{elem.brand}</h4>
        <h4>{elem.name}</h4>
        <h4>{elem.prix}€</h4>
       </div>
      </div>
    )}
    </div> 
   </div>
  </>
 )
}