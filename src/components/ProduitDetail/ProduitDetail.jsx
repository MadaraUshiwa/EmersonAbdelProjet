import './ProduitDetail.css'
import React from 'react'
import { Add_to_pannier } from '../../features/DataSlice/DataSlice';
import {useDispatch, useSelector} from 'react-redux'
import { useParams, Link } from 'react-router-dom'


export default function ProduitDetail() {
  const dispatch = useDispatch();
  const {category,brand,id,produit}= useParams()

  const handleAddToCart = () => {
    dispatch(Add_to_pannier(sub_data.produits[id]));
  };
 const sub_data = useSelector((state)=>state.data)
 console.log();
  return (
    <>
     <div className="details_zone">
       {
        (sub_data.produits.filter((elem)=>elem.id === id).map((item,i)=>
        <div className="data_details" key={i}>
         <div className="img_details">
          <img src={`../../../../${item.img}`} alt="" />
         </div>
         <div className="contenu">
          <div className="text_details">
           <div className="route">
            <li><Link className='Link3' to={'/'}>{`Home `}</Link>{'>'}</li>
            <li><Link className='Link3' to={`/Category/${category}`}>{`${category}`}</Link>{'>'}</li>
            <li><Link className='Link3' to={`/Category/${category}/details/${id}/${brand}`}>{`${brand} `}</Link>{'>'}</li>
            <li>{produit}</li>
           </div>
           <div className="div_top">
            <a href="#">{item.brand}</a>
            <h1>{item.brand} {item.name}</h1>
            <h3>{`± ${item.poids}`}</h3>
           </div>
           <div className="div_prix">
            <div className="m-p">Meilleur Prix</div>
            <h2>{item.prix}€/unit</h2>
           </div>
           <div className="description">
           <h3>Description:</h3>
           <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, soluta eius. Autem facere eligendi quidem sint id, maxime nostrum dignissimos iste temporibus deleniti omnis eos, esse, suscipit possimus rerum illo!
           Quam nobis modi quae consequatur, ea repudiandae delectus pariatur at dolore eligendi neque repellendus quasi saepe distinctio perspiciatis, eum corporis? Laborum explicabo commodi ipsa dignissimos autem sunt odio repellendus doloremque.
           Repudiandae consequuntur suscipit omnis, alias error obcaecati quas ipsam accusantium eos assumenda doloribus adipisci officia, at sint deleniti ea dicta fuga ab exercitationem illum libero molestiae. Rem incidunt officiis omnis?</i></p>
           </div>
           <div className="div_bottom">
            <div className="div_nutri">
             <img className='nutri_img' src={'../../../../../'+process.env.PUBLIC_URL + "./img/nutriscore.png"} />
             <h3>Nutri-score</h3>
             <span>Le Nutri-Score est une représentation visuelle du tableau des valeurs nutritionnelles.</span>
             <Link className='Link_nutri'>Plus d'infos sur Nutri-Score</Link>
            </div>
            <button className='btn_add' onClick={handleAddToCart}>
              <span>Ajouter</span><span>+</span>
            </button>
           </div>
          </div>
         </div>
        </div>
        ))
       }
     </div>
    </>
  )
}
