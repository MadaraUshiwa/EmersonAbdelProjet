import './Categorie.css'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom';
export default function Categorie(){
  const {category,brand,id,produit}= useParams()
  const sub_data = useSelector((state)=>state.data)
  const [input, setinput] = useState("")
  const dispatch = useDispatch()
  
 console.log(sub_data);
 console.log(category+"-------------------------------");
 return(
  <>
   <div className="category_div">
    <div className="input_search">
      <input type="text" onChange={(e)=>setinput(e.target.value.toLowerCase())}/>
    </div>
    <div  className="card">
    {
      (sub_data.produits.filter((item)=> input === '' ? item.category ===  category : item.category === category && item.name.toLowerCase().includes(input))).map((elem,i)=>
        <div key={i} className="card_body">
          {/* <div className="click_zone"></div> */}
        <Link className="click_zone" id={elem.id} to={`details/${elem.id}/${elem.brand}/${elem.name}`}>
        <div className="img">
          <img src={elem.img} alt="" />
        </div>
        <div className="details">
          <h4>{elem.brand}</h4>
          <h4>{elem.name}</h4>
          <h4>{elem.prix}€</h4>
        </div>
        </Link>
        </div>
      )
  }
    </div> 
   </div>
  </>
 )
}