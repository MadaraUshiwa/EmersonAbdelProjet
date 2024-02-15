import { Add_to_pannier } from '../../features/DataSlice/DataSlice';
import {useDispatch, useSelector} from 'react-redux'
export default function Categorie({choix}){
 const sub_data = useSelector((state)=>state.data)
 const dispatch = useDispatch()
 console.log(sub_data);
 return(
  <>
  <h1>Dans categorie {choix}</h1>
  {/* <h2>here{sub_data.produits[0].name}</h2> */}
  {sub_data.produits.filter((cat)=>cat.category === choix).map((elem,i)=>
   <div key={i} className="card">
    <div className="card_body">
     <div className="img">
      <img src={elem.img} alt="" />
     </div>
     <div className="details">
      <h2>{elem.brand}</h2>
      <h2>{elem.name}</h2>
      <h2>{elem.prix}</h2>
     </div>
    </div>
   </div> 
  )}
  </>
 )
}