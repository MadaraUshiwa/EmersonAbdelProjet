import './Categorie.css'
import { Add_to_pannier } from '../../features/DataSlice/DataSlice';
import {useDispatch, useSelector} from 'react-redux'
export default function Categorie({choix}){
 const sub_data = useSelector((state)=>state.data)
 const dispatch = useDispatch()
 console.log(sub_data);
 return(
  <>
   <div className="category_div">
    {/* <h2>here{sub_data.produits[0].name}</h2> */}
    <div  className="card">
    {sub_data.produits.filter((cat)=>cat.category === choix).map((elem,i)=>
      <div key={i} className="card_body">
       <div className="click_zone"></div>
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